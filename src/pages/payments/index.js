/**
 * @jsxImportSource theme-ui
 * Importing necessary dependencies from React and Theme UI for styling and state management.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop-type checking
import { Box, Input, Button } from 'theme-ui';

/**
 * Functional component for handling payments, showcasing an online payment form.
 * Utilizes useState for form data management and provides an enhanced UI experience.
 */
const PaymentPage = () => {
  // State for managing form data
  const [formData, setFormData] = useState({
    customerID: '',
    lastName: '',
    zipCode: '',
    amount: '',
  });

  /**
   * Handles changes to form inputs, updating the state with the new values.
   * @param {Object} e - The event object from the input change.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Submits the form data by constructing a URL with the form data and opening it in a new tab.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const url = `https://dealercollect.com/DCCore/dms/payment/digitzs/payment-online.xhtml?dmsRefNum=4050-5792-${formData.customerID}-${formData.lastName}-${formData.zipCode}-Website&merchantId=dealercl-wheatonway-32626287-1552944-151017866&amount=${formData.amount}`;
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
      <h1>Online Payment Center</h1>
      <Box
        as="form"
        id="myForm"
        method="post"
        sx={{ width: '100%', maxWidth: '500px', mx: 'auto', padding: '2rem', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
        onSubmit={handleSubmit}
        target="_blank"
      >
        {/* Improved input fields with better styling for a more professional look */}
        <Input sx={{ my: 2, p: '12px', fontSize: '15pt' }} type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <Input sx={{ my: 2, p: '12px', fontSize: '15pt' }} type="number" name="zipCode" placeholder="Zip Code" onChange={handleChange} />
        <Input sx={{ my: 2, p: '12px', fontSize: '15pt' }} type="number" name="customerID" placeholder="Customer ID" onChange={handleChange} />
        <Input sx={{ my: 2, p: '12px', fontSize: '15pt' }} type="number" name="amount" placeholder="Amount" onChange={handleChange} />
        {/* Submit button with improved styling */}
        <Button sx={{ cursor: 'pointer', fontSize: '16pt', p: '10px', backgroundColor: '#007bff', color: '#ffffff', ':hover': { backgroundColor: '#0056b3' } }}>Process Payment</Button>
      </Box>
    </Box>
  );
};

// Prop-type checking for enhanced code reliability and maintainability
PaymentPage.propTypes = {
  customerID: PropTypes.string,
  lastName: PropTypes.string,
  zipCode: PropTypes.string,
  amount: PropTypes.string,
};

export default PaymentPage;
