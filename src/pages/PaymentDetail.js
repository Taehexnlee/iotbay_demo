import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
  const [payments, setPayments] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }
    // Fetch payment details for the logged-in user from the backend
    axios.get(`http://localhost:8080/api/payment/${userId}`)
      .then((response) => {
        console.log("Fetched payment details from backend:", response.data);
        setPayments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching payment details:", error);
      });
  }, [userId, navigate]);

  const handleAddPayment = () => {
    navigate('/paymentAdd');
  };

  return (
    <div>
      <h2>Payments</h2>
      <h3>Payment options</h3>
      <ul className="paymentDetails">
        {payments.map((payment) => (
          <li key={payment.id}>
            Credit Card: **** **** **** {payment.cardNumber.slice(-4)} <br />
            Expiration: {payment.expiration} <br />
            Card Type: {payment.cardtype} <br />
          </li>
        ))}
      </ul>
      <button onClick={handleAddPayment} className="btn btn-primary">Add Payment</button>
    </div>
  );
};

export default PaymentOptions;