import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [adminCode, setAdminCode] = useState(''); 
  const [errors, setErrors] = useState({}); 

  const handleInput = (event) => {
    setAdminCode(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctAdminCode = '1234'; // Store correct admin code

    if (adminCode === correctAdminCode) {
      navigate('/stockmanager'); 
    } else {
      setErrors({ auth: 'Incorrect admin code' }); 
    }
  };

  return (
    <main>
    <body className='mainHomeCSS'>
    <div className='d-flex justify-content-center align-items-center bg-white'>
      <div className='bg-white p-3 row'>
        <form onSubmit={handleSubmit}> 
          <div className='mb-3'>
            <label htmlFor='adminCode'><strong>Admin Login</strong></label>
            <input 
              type='password' // Mask the input for code entry
              placeholder='Enter Admin Code' 
              name='adminCode'  // Update name to align with handleInput
              onChange={handleInput} 
              className='form-control rounded'
            />
          </div>

          {/* Display authentication error message */}
          {errors.auth && <div className="alert alert-danger" role="alert">{errors.auth}</div>}

          <button type='submit' className='btn btn-success w-100'>Log in</button>
        </form>
      </div>
    </div>
    </body>
    <footer class="site-footer">
    <div class="footer-content">
        <p>&copy; 2024 ISD Vantablack</p> 
        <ul class="footer-links">
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="/adminPage">Admin Login</a></li>
        </ul>
    </div>
</footer>
  </main>
  );
}
