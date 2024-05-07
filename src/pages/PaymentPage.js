import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
  const [paymentOptions, setPaymentOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPaymentOptions();
  }, []);

  const handleAddPayment = () => {
    navigate('/paymentAdd');
  };
  const fetchPaymentOptions = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/api/payment-options');
        setPaymentOptions(data);
    } catch (error) {
        console.error("Failed to fetch payment options:", error);
    }
  };

  const handleDelete = async (optionId) => {
    await axios.delete(`http://localhost:8080/api/payment-options/${optionId}`);
    fetchPaymentOptions();
  };

  const renderPaymentOptions = () => {
    return paymentOptions.map(option => (
      <div key={option.id} style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "10px" }}>
        <h4>{option.type} ending in {option.lastFourDigits}</h4>
        <p>Last used for checkout by {option.user}</p>
        <button onClick={() => alert('Editing not implemented')}>Edit</button>
        <button onClick={() => handleDelete(option.id)}>Delete</button>
      </div>
    ));
  };

  return (
    <div>
      <h2>Payments</h2>
      <h3>Payment options</h3>
      {renderPaymentOptions()}
      <button onClick={handleAddPayment} className="btn btn-primary">Add Payment</button>
    </div>
  );
};

export default PaymentOptions;