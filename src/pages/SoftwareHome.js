import React from 'react'
import { Link } from 'react-router-dom'

// import images here
import MSOffice from '../pages/Images/microsoft office.jpg';
import Oracle from '../pages/Images/oracle services.png';
import Windows11 from '../pages/Images/windows 11.jpg';
import Windows11Pro from '../pages/Images/windows 11 pro.jpg';
import Procurify from '../pages/Images/procurify.jpg';
import Adobe from '../pages/Images/Adobe.png';

export default function SoftwareHome() {
  return (
  <main>
    <body className='mainHomeCSS'>
        <p class="hometext">Software Home</p>
        <div class="search-bar">
            <form action="#">
            <input type="text" placeholder="Search..." name="search"/>
            <button type="submit">Search</button>
            </form>
          </div>
          <div class="product-grid">
        <div class="product">
            <img src={MSOffice} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Microsoft Office 365</h3>
                <p>$220</p>
            </div> 
        </div>
        <div class="product">
            <img src={Oracle} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Oracle for Business</h3>
                <p>$160</p>
            </div> 
        </div>
        <div class="product">
            <img src={Windows11} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Windows 11 Standard Edition</h3>
                <p>$280</p>
            </div> 
        </div>
        <div class="product">
            <img src={Windows11Pro} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Windows 11 Pro Edition</h3>
                <p>$350</p>
        </div>
        </div>
        <div class="product">
            <img src={Procurify} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Procurify Services</h3>
                <p>$130</p>
        </div>
        </div>
        <div class="product">
            <img src={Adobe} alt="IoTBay" class="product-image"></img>
            <div class="product-info">
                <h3>Adobe Suite</h3>
                <p>$299.99</p>
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
