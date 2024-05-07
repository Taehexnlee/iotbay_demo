import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IoTBayLogo from '../pages/Images/IoTBay.png';

const Navbar = () => {
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
        <nav>
            <div className="logo">
                <img src={IoTBayLogo} alt="IoTBay" className="logo-image" />
            </div>
            <section className="page-links">
                <Link to="/">Home</Link>
                <Link to="/hardwareHome">Hardware Products</Link>
                <Link to="/softwareHome">Software Products</Link>
                <Link to="/aboutUs">About us</Link>
                
            </section>
            <ul className="auth-buttons">
                {!isAuthenticated() ? (
                    <>
                        <li>
                            <Link to="/login" className="login-button">Log in</Link>
                        </li>
                        <li>
                            <Link to="/adduser" className="register-button">Register</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/PaymentPage"className="login-button view-account-button">Payment</Link>
                        </li>
                        <li>
                            <Link to="/view" className="login-button view-account-button">My Account</Link>
                        </li>
                        <li>
                            <Link to="/edit" className="login-button edit-account-button">Edit Account</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="login-button logout-button">Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
