import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserEmail(storedUser.email || ""); // Fallback to "" if email is null
    }
  }, []);

  return (
    <main>
      <body className="historybranchbody">
      <h2>Welcome to your account, {userEmail}</h2>
      <div className="account-details-container">
        <div className="column">
        <h2>Account:</h2>
          <Link to="/edit" className="account-btn">Edit Account</Link>
          <Link to="/view" className="account-btn">My Account Details</Link>
        </div>
        <div className="column">
        <h2>Details:</h2>
          <Link to="/address" className="account-btn">View Shipping Details</Link>
          <Link to="/paymentDetail" className="account-btn">View Payment Details</Link>
        </div>
        <div className="column">
        <h2>Logs and History:</h2>
          <Link to="/logs" className="account-btn">View Logs</Link>
          <Link to="/historyBranch" className="account-btn">History</Link>
        </div>
      </div>
      </body>
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2024 ISD Vantablack</p>
          <ul className="footer-links">
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="/adminPage">Admin Login</a></li>
          </ul>
        </div>
      </footer>
    </main>
  );
};

export default AccountPage;
