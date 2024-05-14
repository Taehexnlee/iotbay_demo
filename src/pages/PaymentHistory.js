import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/payment')
            .then(response => {
                setPayments(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the payments!", error);
            });
    }, []);

    return (
        <div className="payment-details">
            <h2>Payment History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.paymentId}>
                            <td>{new Date(payment.date).toLocaleDateString()}</td>
                            <td>${payment.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;