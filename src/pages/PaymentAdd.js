import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import paymentValidation from '../pages/PaymentValidation';

export default function Payment() {
    let navigate = useNavigate();
    const [isSelected, setIsSelected] = useState(false);
    
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: ""
    });
    const [errors, setErrors] = useState({
        cardNumberError: "",
        expirationDateError: "",
        cvvError: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = paymentValidation(paymentDetails);
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8080/payment', paymentDetails);
            navigate('/payment-success');
        } catch (error) {
            console.error('Failed to submit payment:', error);
            setErrors({ ...errors, payment: "Payment failed. Please try again later." });
        }
    };

    const toggleSelected = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-white'>
            <div className='bg-white p-3 row'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='cardNumber'><strong>Credit Card</strong></label>
                        <input type='text' placeholder='Enter Card' name='cardNumber'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.cardNumberError && <span className='text-danger'>{errors.cardNumberError}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='expirationDate'><strong>Expiration</strong></label>
                        <input type='text' placeholder='Enter Expiration' name='expirationDate'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.expirationDateError && <span className='text-danger'>{errors.expirationDateError}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cvv'><strong>CVV</strong></label>
                        <input type='text' placeholder='Enter CVV' name='cvv'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.cvvError && <span className='text-danger'>{errors.cvvError}</span>}
                    </div>
                    
                    {errors.auth && <div className="alert alert-danger" role="alert">{errors.auth}</div>}
                    <button type='submit' className='btn btn-success w-100'>Confirm</button>
                    <button type="button" className={`btn btn-outline-dark ${isSelected ? 'selected' : ''}`} onClick={toggleSelected}>Visa</button>
                    <button type="button" className={`btn btn-outline-dark ${isSelected ? 'selected' : ''}`} onClick={toggleSelected}>MasterCard</button>
                    <button type="button" className={`btn btn-outline-dark ${isSelected ? 'selected' : ''}`} onClick={toggleSelected}>Bpay</button>
                </form>
            </div>
        </div>
    );
}
