import React from 'react'
import { Link } from 'react-router-dom'
import IoTBayLogo from '../pages/Images/IoTBay.png';

export default function Navbar() {
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

                <Link class='login-button' to={'/login'}>Log in</Link>
                <Link class='register-button' to={'/adduser'}>Register</Link>
                
            </div>
        </nav>
    </div>
  )
}
