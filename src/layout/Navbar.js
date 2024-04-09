import React from 'react'
import { Link } from 'react-router-dom'
import IoTBayLogo from '../pages/Images/IoTBay.png';

export default function Navbar() {
  return (
    <nav> <div class="logo">
      <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img> </div>
    <section class="page-links">
      <a href="/">Home</a>
      <a href="/hardwareHome">Hardware Products</a> <a href="/softwareHome">Software Products</a>
      <a href="/aboutUs">About us</a>
    </section>
    <div class="auth-buttons"> <a href="/login" class="login-button">Log in</a>
      <a href="/adduser" class="register-button">Register</a>
    </div>
  </nav>

  )
}