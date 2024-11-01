import { useState, useEffect } from 'react';
import { format, isBefore, startOfMonth, endOfMonth } from 'date-fns';
import { Mail, Phone, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { submitFormData } from '../../backend/formHandler'; // Import the form submission handler

// Region codes for different countries
const regionCodes = {
  ID: '62',
  MY: '60',
  // Add other Asian countries as needed
};

// Phone validation rules for different countries
const phoneValidationRules = {
  ID: /^62\d{9,11}$/,
  MY: /^60\d{9,10}$/,
  // Add other validation rules as needed
};

// Email validation rule
const emailValidationRule = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

/**
 * Appointment Component
 * 
 * This component renders a form that allows users to book an appointment.
 * It includes fields for email, phone number, region, and date.
 * The form data is validated and submitted to the backend server.
 */
function Appointment() {
  // State variables to manage form data and validation
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    region: 'ID',
    date: null,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [dateError, setDateError] = useState('');

  // useEffect hook to validate form data whenever it changes
  useEffect(() => {
    const isEmailValid = formData.email && formData.email.includes('@');
    const isPhoneValid = formData.phone && formData.phone.length > 0;
    setIsFormValid(isEmailValid && isPhoneValid && formData.date && !dateError);
  }, [formData, dateError]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const localTime = new Date().toString(); // Capture the user's local time
    try {
      await submitFormData({ ...formData, localTime });
      // Reset form inputs after successful submission
      setFormData({
        email: '',
        phone: '',
        region: 'ID',
        date: null,
      });
      setDate(null);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle date selection
  const handleDateSelect = (selectedDate) => {
    const currentDate = new Date();
    const startOfCurrentMonth = startOfMonth(currentDate);
    const endOfCurrentMonth = endOfMonth(currentDate);

    if (isBefore(selectedDate, startOfCurrentMonth)) {
      setDateError("You aren't a time traveler, okay? How can you book a previous month?");
      setDate(null);
      setFormData((prevData) => ({
        ...prevData,
        date: null,
      }));
    } else {
      setDateError('');
      setDate(selectedDate);
      setFormData((prevData) => ({
        ...prevData,
        date: selectedDate,
      }));
      setIsPopoverOpen(false); // Close the popover when a date is selected
    }
  };

  // Handle region change
  const handleRegionChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      region: e.target.value,
      phone: '', // Reset phone number when region changes
    }));
  };

  return (
    <Card className="border border-blue-100 bg-white p-10 font-manrope">
      <CardContent className="p-5">
        <h2 className="text-2xl font-bold text-center mb-5 text-[#0077CC]">
          Easily book an appointment in 3 simple steps.
        </h2>
        <form
          className="flex flex-col gap-x-4 md:flex-row md:items-end"
          onSubmit={handleSubmit}
        >
          <div className="flex-1">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0077CC]" />
              <span className="text-neutral-400 text-base">Email Address</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="mt-2 border-gray-200 rounded-xl"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#0077CC]" />
              <span className="text-neutral-400 text-base">Contact Number</span>
            </Label>
            {phoneError && formData.phone && <p className="text-red-500 text-sm">{phoneError}</p>}
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select
                  id="region"
                  name="region"
                  className="h-full py-0 pl-1 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md"
                  value={formData.region}
                  onChange={handleRegionChange}
                  required
                >
                  {Object.keys(regionCodes).map((code) => (
                    <option key={code} value={code}>
                      +{regionCodes[code]}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Your Contact Number"
                className="pl-16 border-gray-200 rounded-xl w-full"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <Label htmlFor="date" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-[#0077CC]" />
              <span className="text-neutral-400 text-base">Select Date</span>
            </Label>
            {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="Pick a Date"
                  className="mt-2 border-gray-200 rounded-xl"
                  value={date ? format(date, 'dd/MM/yy') : ''}
                  readOnly
                  required
                />
              </PopoverTrigger>
              <PopoverContent className="mt-2 bg-white shadow-lg">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                  showNavigation // Ensure navigation is enabled
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button
            type="submit"
            className="mt-4 md:mt-0 bg-blue-500 text-white rounded-xl px-6 py-3 hover:bg-blue-600 transition duration-300"
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Appointment;
