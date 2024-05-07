import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <main>
    <body>
  
  <section id="about-us">
    <div class="container">
      <h1>About Us</h1>

      <div class="about-content">
        <div class="image-block">
          <img src="placeholder-team.jpg" alt="Our Team"></img>
        </div>
        <div class="text-block">
          <h2>Our Mission</h2>
          <p>Explain your core mission. What drives your IT startup? Why do you do what you do?</p>
        </div>
      </div>

      <div class="about-content">
        <div class="text-block"> 
          <h2>Our Story</h2>
          <p>Share the story of your IT startup's founding. What challenges inspired its creation?</p>
        </div>
        <div class="image-block">
          <img src="placeholder-product.jpg" alt="Our Products"></img>
        </div>
      </div>

      <div class="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Value 1</li>
          <li>Value 2</li>
          <li>Value 3</li>
        </ul>
      </div>

    </div>
  </section>

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