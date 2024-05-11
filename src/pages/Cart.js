import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cart/contents");
      if (response.status === 200) {
        setCartItems(response.data);
      } else {
        throw new Error("Failed to fetch cart items");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    console.log("Item :", itemId);
    console.log("Q :", newQuantity);
    try {
        // Send the new quantity as a JSON object in the request body
        await axios.put(`http://localhost:8080/cart/cart/update/${itemId}`, { quantity: newQuantity });
        fetchCartItems(); // Refresh cart items after updating quantity
    } catch (error) {
        console.error("Failed to update quantity:", error);
    }
};



  const removeItem = async (itemId) => {
    console.log("Item :", itemId);
    try {
      await axios.delete(`http://localhost:8080/cart/cart/remove/${itemId}`);
      fetchCartItems(); // Refresh cart items after removing item
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.itemId}>
              <p>{item.itemName}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => updateQuantity(item.itemId, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.itemId, item.quantity - 1)}>-</button>
              <button onClick={() => removeItem(item.itemId)}>Remove</button>
            </div>
          ))}
          <p>Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
          <Link to="/checkout">Proceed to Checkout</Link> {/* Use Link component for navigation */}
        </div>
      )}
    </div>
  );
};

export default Cart;
