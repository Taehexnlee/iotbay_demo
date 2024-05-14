import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function historyBranch() {
   
    return (
    <main>
    <body className="historybranchbody history-branch-body">
        
            <div class="account-history-container">
            <Link to="/OrderHistory" className="history-btn order-history">Order History</Link>
            {/* <Link to="/shipmentHistory" className="history-btn shipment-history">Shipment History</Link> */} {/*I WILL MAYBE FIX AND ADD THIS */}
            <Link to="/paymentHistory" className="history-btn payment-history">Payment History</Link>
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
    )}