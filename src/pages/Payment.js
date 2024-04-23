import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../users/LoginValidation';

export default function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    // Initialize errors state to also handle authentication errors
    const [errors, setErrors] = useState({auth: ''});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Clear previous authentication errors
        setErrors({ ...errors, auth: '' });

        try {
            const response = await axios.post('http://localhost:8080/authenticate', user);
            // Assuming successful authentication if no error is thrown
            localStorage.setItem('user', JSON.stringify({ email: user.email }));
            navigate('/welcome'); // Navigate to the Welcome page
        } catch (error) {
            // Handle authentication errors
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // Handle incorrect credentials
                setErrors({ ...errors, auth: "Incorrect email or password. Please try again." });
            } else {
                // Handle other errors such as network issues
                setErrors({ ...errors, auth: "An error occurred. Please try again later." });
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-white'>
            <div className='bg-white p-3 row'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='card'><strong>Credit Card</strong></label>
                        <input type='card' placeholder='Enter Card' name='card'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='expiration'><strong>Expiration</strong></label>
                        <input type='expiration' placeholder='Enter Expiration' name='Expiration'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='CVV'><strong>CVV</strong></label>
                        <input type='CVV' placeholder='Enter CVV' name='CVV'
                               onChange={handleInput} className='form-control rounded'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    
                    {/* Display authentication error message */}
                    {errors.auth && <div className="alert alert-danger" role="alert">{errors.auth}</div>}
                    <button type='submit' className='btn btn-success w-100'>Confirm</button>
                    <p>You agree to our terms and policies.</p>
                    <Link className='btn btn-outline-dark' to={'/success'}>Apple Pay</Link>
                    <Link className='btn btn-outline-dark' to={'/success'}>MasterCard</Link>
                    <Link className='btn btn-outline-dark' to={'/success'}>Bpay</Link>
                </form>
            </div>
        </div>
    );
}
