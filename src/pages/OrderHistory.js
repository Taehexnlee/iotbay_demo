import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      // Make a request to fetch order history based on the session identifier
      const response = await axios.get("http://localhost:8080/order/history", {
        params: {
          sessionIdentifier: "your_session_identifier", // Replace with actual session identifier
        },
      });
      setOrderHistory(response.data);
    } catch (error) {
      console.error("Failed to fetch order history:", error);
    }
  };

  // Function to search order history
  const searchOrderHistory = async (searchTerm) => {
    try {
      const response = await axios.get(`/api/orders?search=${searchTerm}`);
      setOrderHistory(response.data);
    } catch (error) {
      console.error("Error searching order history:", error);
    }
  };

  return (
    <div>
      <h1>Order History</h1>
      <div>
        <input
          type="text"
          placeholder="Search by order number or date..."
          onChange={(e) => searchOrderHistory(e.target.value)}
        />
      </div>
      {orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orderHistory.map((order) => (
            <div key={order.orderId}>
              <h2>Order #{order.orderId}</h2>
              <p>Session Identifier: {order.sessionIdentifier}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.itemId}>
                    {item.itemName} - Quantity: {item.quantity} - Price: $
                    {item.price}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
