import React from 'react'
import { Link } from 'react-router-dom'

// import images here
import GPU from '../pages/Images/GPU.png';
import SSD from '../pages/Images/SSD.png';
import RAM from '../pages/Images/RAM.png';
import HDD from '../pages/Images/HDD.png';
import CPU from '../pages/Images/CPU.png';
import MOTHERBOARD from '../pages/Images/MBD.png';

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
            <img src={GPU} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Graphics Card</h3>
                <p>$499.99</p>
            </div> 
        </div>
        <div class="product">
            <img src={SSD} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>SSD</h3>
                <p>$89.99</p>
            </div> 
        </div>
        <div class="product">
            <img src={RAM} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>RAM</h3>
                <p>$69.99</p>
            </div> 
        </div>
        <div class="product">
            <img src={HDD} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Hard-Drive</h3>
                <p>$49.99</p>
        </div>
        </div>
        <div class="product">
            <img src={CPU} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>CPU</h3>
                <p>$289.99</p>
        </div>
        </div>
        <div class="product">
            <img src={MOTHERBOARD} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Motherboard</h3>
                <p>$99.99</p>
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
