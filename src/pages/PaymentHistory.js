import React, { useState } from 'react';
import axios from 'axios';

const paymentHistory = () => {

    return (
        <div className="payment-details">
            <h2>Payment History</h2>
                <div className="order-number">
                    <p>Order Number</p>
                </div>
                <div className="payment-amount">
                    <p>Payment Amount</p>
                </div>
                <div className="payment-method-detail">
                    <p>Payment Method Details"</p>
                </div>
        </div>
    );
};

export default paymentHistory;