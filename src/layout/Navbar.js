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
    <ul className="navbar-nav ms-auto">
                            {!isAuthenticated() && (
                                <>
                                    <li className="nav-item">
                                        <Link className='btn btn-outline-light me-2' to={'/login'}>Log in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='btn btn-outline-light' to={'/adduser'}>Register</Link>
                                    </li>
                                </>
                            )}
                            {isAuthenticated() && (
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
                                </li>
                            )}
                        </ul>
  </nav>

  )
}