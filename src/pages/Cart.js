import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    try {
      await axios.put(`http://localhost:8080/cart/cart/update/${itemId}`, {
        quantity: newQuantity,
      });
      fetchCartItems();
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/cart/cart/remove/${itemId}`);
      fetchCartItems();
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const saveOrder = async () => {
    try {
      console.log("cart items:", cartItems);
      await axios.post("http://localhost:8080/order/save", cartItems);
      alert("Order saved successfully!");
    } catch (error) {
      console.error("Failed to save order:", error);
      alert("Failed to save order. Please try again later.");
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
              <button
                onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
              >
                -
              </button>
              <button onClick={() => removeItem(item.itemId)}>Remove</button>
            </div>
          ))}
          <p>
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button onClick={saveOrder}>Save Order</button>
          <Link to="/PaymentAdd">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
