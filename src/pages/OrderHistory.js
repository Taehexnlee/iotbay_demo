import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const sessionIdentifier = localStorage.getItem("sessionIdentifier");
      let response;
      if (sessionIdentifier) {
        response = await axios.get(
          `http://localhost:8080/order/history?sessionIdentifier=${sessionIdentifier}`
        );
      } else {
        response = await axios.get("http://localhost:8080/order/all");
      }
      console.log("Response data:", response.data);
      setOrderHistory(response.data);
    } catch (error) {
      console.error("Failed to fetch order history:", error);
      setOrderHistory([]);
    }
  };

  const searchOrderHistoryById = async (searchTerm) => {
    try {
      const response = await axios.get("http://localhost:8080/order/history", {
        params: {
          orderId: searchTerm,
        },
      });
      setOrderHistory(response.data);
    } catch (error) {
      console.error("Error searching order history by ID:", error);
      setOrderHistory([]);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  const handleSearchByDate = (searchDate) => {
      const formattedSearchDate = formatDateTime(searchDate);
    
      const filteredOrders = orderHistory.filter(order => {
        // Check if the submission time includes the formatted search date
        const submissionTime = formatDateTime(order.submissionTime);
        if (submissionTime.includes(formattedSearchDate)) {
          return true;
        }
    
        // Check if the search term matches the year, month, day, hour, or minute part
        const parts = formattedSearchDate.split(/[-T:]/);
        for (const part of parts) {
          if (submissionTime.includes(part)) {
            return true;
          }
        }
    
        return false;
      });
    
      setOrderHistory(filteredOrders);
    };
    


  return (
    <div>
      <h1>Order History</h1>
      <div>
        <input
          type="text"
          placeholder="Search by order number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchOrderHistoryById(searchTerm)}>
          Search
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by date..."
          onChange={(e) => handleSearchByDate(e.target.value)}
        />
        <button onClick={() => handleSearchByDate(searchTerm)}>Search</button>
      </div>
      {Array.isArray(orderHistory) && orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orderHistory.map((order) => (
            <div key={order.orderId}>
              <h2>Order #{order.orderId}</h2>
              <p>Session Identifier: {order.sessionIdentifier}</p>
              {order.submissionTime && (
                <p>
                  Submission Time:{" "}
                  {new Date(order.submissionTime).toLocaleString()}
                </p>
              )}
              {order.savingTime && (
                <p>
                  Saving Time: {new Date(order.savingTime).toLocaleString()}
                </p>
              )}
              {order.cartItems ? (
                <ul>
                  {order.cartItems.map((item) => (
                    <li key={item.itemId}>
                      {item.itemName} - Quantity: {item.quantity} - Price: $
                      {item.price}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No items in this order.</p>
              )}
              <Link to={`/EditOrder/${order.orderId}/edit`}>Edit Order</Link>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
