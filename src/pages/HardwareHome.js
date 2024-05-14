import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// import images here
import IoTBayLogo from "../pages/Images/IoTBay.png";

export default function HardwareHome() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      searchProducts(searchTerm);
    } else {
      fetchProducts();
    }
  }, [searchTerm]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const searchProducts = async (term) => {
    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(term.toLowerCase()) ||
        product.productCategory.toLowerCase().includes(term.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      await axios.post(`http://localhost:8080/products/${productId}/add-to-cart`, { quantity });
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("Failed to add product to cart. Please try again later.");
    }
  };

  return (
      <main>
        <body className="mainHomeCSS">
        <p className="hometext">Product Home</p>
        <div className="search-bar">
          <form action="#" onSubmit={(e) => { e.preventDefault(); searchProducts(searchTerm); }}>
            <input type="text" placeholder="Search..." name="search" onChange={handleSearchChange} />
          </form>
        </div>
        <div className="product-grid">
          {products.map((product) => (
              <div className="product" key={product.productId}>
                <img
                    src={product.productImage}
                    alt={product.productName}
                    className="logo-image"
                />
                <div className="product-info">
                  <h3>{product.productName}</h3>
                  <p>Price: ${product.productPrice}</p>
                  <p>Category: {product.productCategory}</p>
                  <button onClick={() => addToCart(product.productId, 1)}>
                    Add to Cart
                  </button>
                </div>
              </div>
          ))}
        </div>
        </body>
        <footer className="site-footer">
          <div className="footer-content">
            <p>&copy; 2024 ISD Vantablack</p>
            <ul className="footer-links">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <Link to="/adminPage">Admin Login</Link>
              </li>
            </ul>
          </div>
        </footer>
      </main>
  );
}
