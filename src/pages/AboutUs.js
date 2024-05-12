import React from 'react'
import { Link } from 'react-router-dom'
import ourProducts from '../pages/Images/our products.png';
import ourTeam from '../pages/Images/our Team.jpeg';


export default function AboutUs() {
  return (
    <main>
      <body>

        <main>
          <p class="abus-title">About us</p>
        </main>

      <div class="about-content">
        <div class="image-block">
          <img src={ourTeam} alt="Our Team"></img>
        </div>
        <div class="text-block">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a suscipit enim. Praesent ac arcu vel enim fermentum pretium. Nam lobortis gravida purus sed molestie. </p>
        </div>
      </div>

      <div class="about-content">
        <div class="text-block"> 
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a suscipit enim. Praesent ac arcu vel enim fermentum pretium. Nam lobortis gravida purus sed molestie. </p>
        </div>
        <div class="image-block">
    <img src={ourProducts} alt="Our Products" class="image-block"></img>
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