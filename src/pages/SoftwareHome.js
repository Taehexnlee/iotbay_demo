import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import images here
import MSOffice from '../pages/Images/MSO.png';
import Oracle from '../pages/Images/ORACLE.png';
import Windows11 from '../pages/Images/WINDOWS11.png';
import Windows11Pro from '../pages/Images/WINDOWS11PRO.png';
import Procurify from '../pages/Images/PROCURIFY.png';
import Adobe from '../pages/Images/ADOBE.png';

export default function SoftwareHome() {
  const [searchTerm, setSearchTerm] = useState('');
  

  const allProducts = [
    { name: "Microsoft Office 365", image: MSOffice, price: "$220" },
    { name: "Oracle for Business", image: Oracle, price: "$160" },
    { name: "Windows 11 Standard Edition", image: Windows11, price: "$280" },
    { name: "Windows 11 Pro Edition", image: Windows11Pro, price: "$350" },
    { name: "Procurify Services", image: Procurify, price: "$130" },
    { name: "Adobe Suite", image: Adobe, price: "$299.99" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Initialize with allProducts

  useEffect(() => {
    const newFilteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts); // Filter on every input change
  }, [searchTerm]); // Dependency on searchTerm


  const handleSearch = () => {
    setSearchTerm(''); 
    setFilteredProducts(allProducts); 
  };

  return (
    <main>
      <body className='mainHomeCSS'>
        <p className="hometext">Software Home</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> 

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div className="product" key={product.name}>
              <img src={product.image} alt="IoTBay" className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
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
