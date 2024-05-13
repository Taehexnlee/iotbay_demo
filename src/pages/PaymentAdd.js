import axios from 'axios';
import React, { useState } from 'react';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';

import paymentValidation from '../pages/PaymentValidation';

export default function Payment() {
    let navigate = useNavigate();

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expiration: "",
        cvv: "",
        cardtype: ""
    });
    const [errors, setErrors] = useState({
        cardNumberError: "",
        expirationError: "",
        cvvError: ""
    });

    const onInputChange = (e) => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setPaymentDetails({ ...paymentDetails, [e.target.name]: value });
      };

    const onSubmit = async (e) => {
        e.preventDefault();
    
        // Check if all fields are filled out
        if (
          !paymentDetails.cardNumber
        ) {
          setErrors(true); // Set error state to true
          return;
        }
    
        // If everything is filled out, make the API call
        try {
            console.log(paymentDetails);
          await axios.post("http://localhost:8080/payment", paymentDetails);
          navigate("/");
        } catch (error) {
          // Handle the error appropriately
          console.error("There was an error submitting the form:", errors);
        }
      };

    return (
            <div className="mb-3">
                <form onSubmit={onSubmit}>
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className={`form-control`}
                    placeholder="Enter your Card Number"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={onInputChange}
                  />
                  <button type="submit" className='btn btn-success w-100'>Confirm</button>
                  </form>
                </div>
                

    );
}
