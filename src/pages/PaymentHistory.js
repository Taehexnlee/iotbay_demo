import React, { useState } from 'react';
import axios from 'axios';

const paymentHistory = () => {

    return (
        <div className="order-details">
            <h2>Payment History</h2>
                <div className="order-info">
                    <p>Order Info</p>
                </div>
                <div className="delivery-info">
                    <p>Delivery Info</p>
                </div>
                <div className="item-info">
                    <p>Item Info</p>
                </div>
                <div className="payment-info">
                    <p>Payment Info</p>
                </div>
        </div>
    );
};

export default paymentHistory;