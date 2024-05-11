import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SavedCart = () => {
  // State to store saved cart items
  const [savedCartItems, setSavedCartItems] = useState([]);

  // Effect to fetch saved cart items when component mounts
  useEffect(() => {
    fetchSavedCartItems();
  }, []);

  // Function to fetch saved cart items from browser storage
  const fetchSavedCartItems = () => {
    // Retrieve saved cart items from browser storage (assuming you're using localStorage)
    const savedCart = JSON.parse(localStorage.getItem('savedCart')) || [];
    setSavedCartItems(savedCart);
  };

  // Function to load saved cart and proceed to checkout
  const loadSavedCart = () => {
    // Redirect to checkout page (assuming you're using react-router-dom)
    // Replace '/checkout' with the actual path to your checkout page
    history.push('/checkout');
  };

  return (
    <div>
      <h2>Saved Cart</h2>
      {savedCartItems.length === 0 ? (
        <p>Your saved cart is empty</p>
      ) : (
        <div>
          {savedCartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <button onClick={loadSavedCart}>Load Saved Cart</button>
        </div>
      )}
    </div>
  );
};

export default SavedCart;
