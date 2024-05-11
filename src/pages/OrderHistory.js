import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  // State to store order history
  const [orderHistory, setOrderHistory] = useState([]);

  // Effect to fetch order history when component mounts
  useEffect(() => {
    fetchOrderHistory();
  }, []);

  // Function to fetch order history from the backend
  const fetchOrderHistory = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrderHistory(response.data);
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  };

  // Function to search order history
  const searchOrderHistory = async (searchTerm) => {
    try {
      const response = await axios.get(`/api/orders?search=${searchTerm}`);
      setOrderHistory(response.data);
    } catch (error) {
      console.error('Error searching order history:', error);
    }
  };

  return (
    <div>
      <h2>Order History</h2>
      <div>
        <input
          type="text"
          placeholder="Search by order number or date..."
          onChange={(e) => searchOrderHistory(e.target.value)}
        />
      </div>
      {orderHistory.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div>
          {orderHistory.map((order) => (
            <div key={order.id}>
              <p>Order Number: {order.orderNumber}</p>
              <p>Date: {order.date}</p>
              <p>Total Amount: ${order.totalAmount}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
