import React from 'react'
import { Link } from 'react-router-dom'

// import images here
import IoTBayLogo from '../pages/Images/IoTBay.png';

export default function HardwareHome() {
  return (
    <main>
      <body className='mainHomeCSS'>
          <p class="hometext">Hardware Home</p>
          <div class="search-bar">
            <form action="#">
            <input type="text" placeholder="Search..." name="search"/>
            <button type="submit">Search</button>
            </form>
          </div>
          <div class="product-grid">
        <div class="product">
            <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img>
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
            </div> 
        </div>
        <div class="product">
            <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img>
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
            </div> 
        </div>
        <div class="product">
            <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img>
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
            </div> 
        </div>
        <div class="product">
            <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img>
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
        </div>
        </div>
        <div class="product">
            <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img>
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
        </div>
        </div>
        <div class="product">
            <img src={IoTBayLogo} alt="IoTBay" class="logo-image"></img>
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
        </div>
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

  )
}
