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
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary d-flex">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src={IoTBayLogo} alt="IoTBay" class="Logo-Image"/> 
          </Link>

                <section class="page-links">
                  <a class='navbar-home' href="/">Home</a>
                  <Link class='navbar-hardware' to={`/hardwareHome`}>Hardware Products</Link>
                  <Link class='navbar-software' to={`/softwareHome`}>Software Products</Link>
                  <Link class='navbar-aboutus' to={`/aboutUs`}>About us</Link>
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
            </div>
        </nav>
    </div>
  )
}