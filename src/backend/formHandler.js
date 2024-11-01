// formHandler.js

/**
 * Submits form data to the backend server.
 * 
 * This function sends a POST request to the backend server with the provided form data.
 * It handles the response and any potential errors that may occur during the request.
 * 
 * @param {Object} formData - The form data to be submitted. This should include all necessary fields required by the backend.
 * @returns {Promise<Object>} - A promise that resolves to the response from the server.
 * @throws {Error} - Throws an error if the network response is not ok or if there is a problem with the fetch operation.
 * 
 * @example
 * const formData = {
 *   email: 'user@example.com',
 *   phone: '1234567890',
 *   region: 'ID',
 *   date: '2024-11-21T00:00:00Z',
 *   localTime: new Date().toString()
 * };
 * 
 * submitFormData(formData)
 *   .then(response => {
 *     console.log('Form submitted successfully:', response);
 *   })
 *   .catch(error => {
 *     console.error('Form submission failed:', error);
 *   });
 */
export const submitFormData = async (formData) => {
  try {
    // Send a POST request to the backend server with the form data
    const response = await fetch('http://localhost:3001/submit', { // Ensure this points to your local server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is not ok (status code outside the range 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response was not ok');
    }

    // Parse the JSON response from the server
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
