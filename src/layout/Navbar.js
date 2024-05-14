import axios from "axios";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IoTBayLogo from '../pages/Images/IoTBay.png';

const Navbar = () => {
    let navigate = useNavigate();

    // Check if user is authenticated
    const isAuthenticated = () => localStorage.getItem('user') != null;

    // Handle logout
    async function  handleLogout() {
        // Remove the user from local storage to log them out
        const userId = JSON.parse(localStorage.getItem("user"))?.id; // Null check added here
        const logoutTime = new Date().toString();
        try {
            const response = await axios.post(`http://localhost:8080/user/${userId}/logout`, logoutTime);
            console.log(response.data); // Log success message
          } catch (error) {
            console.error('Error storing logout time front end:', error);
          }
        localStorage.removeItem('user');
        // Redirect to login page
        navigate('/login');
    };

    return (
        <nav>
            <div className="logo">
                 <Link to="/">
  <img src={IoTBayLogo} alt="IoTBay" className="logo-image" />
      </Link>
            </div>
            <section className="page-links">
                <Link to="/">Home</Link>
                <Link to="/hardwareHome">Products</Link>
                <Link to="/aboutUs">About us</Link>
            </section>
            <ul className="auth-buttons">
                {!isAuthenticated() ? (
                    <>
                        <li>
                            {/* <Link to="/address" className="login-button view-logs-button">Address</Link> */}
                            <Link to="/Cart" className="login-button view-logs-button">Cart</Link>
                        </li>
                        <li>
                        <Link to="/historyBranch" className="register-button">History</Link>
                        </li>
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
                            {/* <Link to="/address" className="login-button view-logs-button">Address</Link> */}
                            <Link to="/Cart" className="login-button view-logs-button">Cart</Link>
                        </li>
                        <li>
                        <Link to="/historyBranch" className="register-button">History</Link>
                        </li>
                        <li>
                            <Link to="/accountPage"className="login-button view-account-button">My Account</Link>

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
