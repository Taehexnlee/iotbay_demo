import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">IotBay</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                </div>
            </nav>
        </div>
    );
}
