import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import paymentValidation from '../pages/PaymentValidation';

export default function Payment() {
    let navigate = useNavigate();

    const [selectedMethod, setSelectedMethod] = useState('');
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

    const handleInput = (event) => {
        const { name, value } = event.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const toggleSelected = (cardtype) => {
        setSelectedMethod(cardtype);
        setPaymentDetails(prevDetails => ({ ...prevDetails, cardtype }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submission started");

        const updatedPaymentDetails = { ...paymentDetails, cardtype: selectedMethod };
        setPaymentDetails(updatedPaymentDetails);

        const validationErrors = paymentValidation(updatedPaymentDetails);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('payment details', updatedPaymentDetails);

        try {
            const response = await axios.post('http://localhost:8080/payment', updatedPaymentDetails);
            if (response.status === 200) {
                navigate('/success');
            } else {
                setErrors({ ...errors, payment: "Payment processing was not successful. Please try again later." });
            }
        } catch (error) {
            console.error('Failed to submit payment:', error);
            setErrors({ ...errors, payment: "Payment failed. Please try again later." });
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-white'>
            <div className='bg-white p-3 row'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='cardNumber'><strong>Credit Card</strong></label>
                        <input type='text' placeholder='Enter Card Number' name='cardNumber'
                               value={paymentDetails.cardNumber} onChange={handleInput} className='form-control rounded'/>
                        {errors.cardNumberError && <span className='text-danger'>{errors.cardNumberError}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='expiration'><strong>Expiration</strong></label>
                        <input type='text' placeholder='Enter Expiration MM/YY' name='expiration'
                               value={paymentDetails.expiration} onChange={handleInput} className='form-control rounded'/>
                        {errors.expirationError && <span className='text-danger'>{errors.expirationError}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cvv'><strong>CVV</strong></label>
                        <input type='text' placeholder='Enter CVV' name='cvv'
                               value={paymentDetails.cvv} onChange={handleInput} className='form-control rounded'/>
                        {errors.cvvError && <span className='text-danger'>{errors.cvvError}</span>}
                    </div>

                    {errors.auth && <div className="alert alert-danger" role="alert">{errors.auth}</div>}
                    <button type="button"
                        className={`btn ${selectedMethod === 'Visa' ? 'btn-dark' : 'btn-outline-dark'}`}
                        onClick={() => toggleSelected('Visa')}>
                        Visa
                    </button>
                    <button type="button"
                        className={`btn ${selectedMethod === 'MasterCard' ? 'btn-dark' : 'btn-outline-dark'}`}
                        onClick={() => toggleSelected('MasterCard')}>
                        MasterCard
                    </button>
                    <button type="button"
                        className={`btn ${selectedMethod === 'Bpay' ? 'btn-dark' : 'btn-outline-dark'}`}
                        onClick={() => toggleSelected('Bpay')}>
                        Bpay
                    </button>
                    <button type="submit" className='btn btn-success w-100'>Confirm</button>
                </form>
            </div>
        </div>
    );
}