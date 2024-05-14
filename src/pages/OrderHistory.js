import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");

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

  const handleSearchByDate = () => {
    const searchDateTime = new Date(searchDate);
    const formattedSearchDateTime = searchDateTime.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const filteredOrders = orderHistory.filter((order) => {
      const submissionDateTime = new Date(order.submissionTime);
      const formattedSubmissionDateTime = submissionDateTime.toLocaleString(
        "en-US",
        {
          month: "numeric",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }
      );
      return formattedSubmissionDateTime === formattedSearchDateTime;
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
          style={{ width: "400px" }}
        />
        <button onClick={() => searchOrderHistoryById(searchTerm)}>
          Search
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by date...MM/DD/YYYY, hh:mm:ss AM"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          style={{ width: "400px" }}
        />
        <button onClick={handleSearchByDate}>Search</button>
      </div>
      <div>
        <button
          onClick={fetchOrderHistory}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Fetch All
        </button>
      </div>

      {Array.isArray(orderHistory) && orderHistory.length === 0 ? (
  <p>No orders found.</p>
) : (
  <div>
    {orderHistory.map((order) => (
      <div key={order.orderId}>
        <h2>Order #{order.orderId}</h2>
        {/* <p>Session Identifier: {order.sessionIdentifier}</p> */}
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
        {/* Link to edit order */}
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