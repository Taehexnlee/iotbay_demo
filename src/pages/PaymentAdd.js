import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import paymentValidation from '../pages/PaymentValidation';

export default function Payment() {
    let navigate = useNavigate();

    const [selectedMethod, setSelectedMethod] = useState();

    const toggleSelected = (cardtype) => {
        setSelectedMethod(cardtype);
        setPaymentDetails(prevDetails => ({ ...prevDetails, cardtype }));
    };

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        cardtype: ""
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
        console.log("Form submission started");
        setPaymentDetails(prevDetails => ({ ...prevDetails, cardtype: selectedMethod }));
        const validationErrors = paymentValidation(paymentDetails);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/user/${userId}/payment-options', paymentDetails);
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

    const handleSuccess = () => {
        navigate('/success');
      };

    return (
        <div className='d-flex justify-content-center align-items-center bg-white'>
            <div className='bg-white p-3 row'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='cardNumber'><strong>Credit Card</strong></label>
                        <input type='text' placeholder='Enter CardNumber' name='cardNumber'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.cardNumberError && <span className='text-danger'>{errors.cardNumberError}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='expirationDate'><strong>Expiration</strong></label>
                        <input type='text' placeholder='Enter Expiration MM/YY' name='expirationDate'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.expirationDateError &&
                            <span className='text-danger'>{errors.expirationDateError}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cvv'><strong>CVV</strong></label>
                        <input type='text' placeholder='Enter CVV' name='cvv'
                               onChange={handleInput} className='form-control rounded'/>
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
                    <button onClick={handleSuccess} className='btn btn-success w-100'>Confirm</button>
                </form>
            </div>
        </div>
    );
}
