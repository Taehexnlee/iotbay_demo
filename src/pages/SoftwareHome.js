import React from 'react'
import { Link } from 'react-router-dom'
import IoTBayLogo from '../pages/Images/IoTBay.png';

export default function SoftwareHome() {
  return (
  <div className='container'>
    <div className='py-4'>
      <header>
       
      </header>

      <main>
        <p class="hometext">Software Home</p>
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
            {/* <img> src="product1.jpg" alt="Product 2"</img> */}
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
            </div> 
        </div>
        <div class="product">
            {/* <img> src="product1.jpg" alt="Product 3"</img> */}
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
            </div> 
        </div>
        <div class="product">
            {/* <img> src="product1.jpg" alt="Product 4"</img> */}
            <div class="product-info">
                <h3>Product Name 1</h3>
                <p>$19.99</p>
            </div> 
        </div>
        </div>
      </main>
    </div>
  </div>
  )
}
