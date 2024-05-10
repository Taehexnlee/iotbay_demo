import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import IoTBayLogo from '../pages/Images/IoTBay.png';

export default function Navbar() {
  let navigate = useNavigate();

    // Check if user is authenticated
    const isAuthenticated = () => localStorage.getItem('user') != null;

    // Handle logout
    const handleLogout = () => {
        // Remove the user from local storage to log them out
        localStorage.removeItem('user');
        // Redirect to login page
        navigate('/login');
    };

  return (
    <nav> <div class="logo">
      <Link to="/">
  <img src={IoTBayLogo} alt="IoTBay" className="logo-image" />
      </Link> 
    </div>
    <section class="page-links">
      <a href="/">Home</a>
      <a href="/hardwareHome">Hardware Products</a> 
      <a href="/softwareHome">Software Products</a>
      <a href="/AboutUs">About Us</a>
      <a href="/PaymentPage">Payment</a>
    </section>
    
  { 
    <div className="auth-buttons"> {/* Use a div for container styling */}
    {!isAuthenticated() && (
      <> 
        <a href="/login" className="login-button">Log in</a>
        <a href="/adduser" className="register-button">Register</a>
      </>
    )}
    {isAuthenticated() && (
      <a onClick={handleLogout} className="login-button">Log in</a>
    )}
  </div>
}
  </nav> 
)}
