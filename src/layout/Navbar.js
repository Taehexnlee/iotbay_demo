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
      <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img> </div>
    <section class="page-links">
      <a href="/">Home</a>
      <a href="/hardwareHome">Hardware Products</a> <a href="/softwareHome">Software Products</a>
      <a href="/aboutUs">About us</a>
    </section>
    
    { <ul class="auth-buttons">
                            {!isAuthenticated() && (
                                <>
                                    <li>
                                    <a href="/login" class="login-button">Log in</a>
                                    </li>
                                    <li>
                                      <a href="/adduser" class="register-button">Register</a>
                                    </li>
                                </>
                            )}
                            {isAuthenticated() && (
                                <li>
                                  {/* <button onClick={handleLogout} class="login-button">Logout</button>  */}
                                  <a onClick={handleLogout} class="login-button">Log in</a>
                                </li>
                            )}
                        </ul>
}
  </nav> 
)}
