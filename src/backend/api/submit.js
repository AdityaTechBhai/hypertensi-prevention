// api/submit.js

/**
 * Handles form submission and stores data in Firestore.
 * 
 * This function receives form data from the frontend, validates it, and stores it in Firestore.
 * It also captures the user's local time and cross-checks it with their IP-based timezone.
 * 
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to send back to the client.
 * @returns {void}
 * @throws {Error} - Throws an error if there is a problem with saving data to Firestore.
 */

import { db } from './firebaseAdmin.js'; // Import Firestore
import { startOfMonth, isBefore } from 'date-fns';
import axios from 'axios';

// Validation rules for different regions and phone numbers
const regionCodes = {
  ID: '62',
  MY: '60',
  // Add other Asian countries as needed
};

const phoneValidationRules = {
  ID: /^62\d{9,11}$/,
  MY: /^60\d{9,10}$/,
  // Add other validation rules as needed
};

const emailValidationRule = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

/**
 * Function to get DNS and timezone information based on the user's IP address.
 * 
 * This function uses the ip-api.com service to fetch detailed information about the user's IP address,
 * including their timezone.
 * 
 * @param {string} ipAddress - The IP address of the user.
 * @returns {Promise<Object>} - A promise that resolves to the DNS and timezone information.
 */
const getDnsAndTimezoneInfo = async (ipAddress) => {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching DNS and timezone information:', error);
    return null;
  }
};

export default async (req, res) => {
  const { email, phone, region, date, localTime } = req.body;

  // Validate email
  if (!emailValidationRule.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Validate phone number
  const fullPhoneNumber = regionCodes[region] + phone.replace(/\s+/g, '');
  if (!phoneValidationRules[region].test(fullPhoneNumber)) {
    return res.status(400).json({ message: 'Invalid phone number' });
  }

  // Validate date
  const selectedDate = new Date(date);
  const currentDate = new Date();
  const startOfCurrentMonth = startOfMonth(currentDate);
  if (isBefore(selectedDate, startOfCurrentMonth)) {
    return res.status(400).json({ message: "You aren't a time traveler, okay? How can you book a previous month?" });
  }

  // Capture user agent and IP address
  const userAgent = req.headers['user-agent'];
  const ipAddress = req.clientIp;

  // Get DNS and timezone information
  const dnsInfo = await getDnsAndTimezoneInfo(ipAddress);

  // Cross-check local time with IP-based timezone
  const localTimeDate = new Date(localTime);
  const timezoneOffset = localTimeDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
  const utcTime = new Date(localTimeDate.getTime() + timezoneOffset);
  const ipBasedTime = new Date(utcTime.getTime() + (dnsInfo.offset * 60000)); // Convert minutes to milliseconds

  try {
    await db.collection('appointments').add({
      email,
      phone: fullPhoneNumber,
      region,
      date: selectedDate,
      userAgent,
      ipAddress,
      dnsInfo,
      localTime,
      ipBasedTime: ipBasedTime.toString(),
    });

    console.log('Received form data:', { email, phone: fullPhoneNumber, region, date, userAgent, ipAddress, dnsInfo, localTime, ipBasedTime });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving to Firestore:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
