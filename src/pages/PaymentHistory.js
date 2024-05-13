import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/payments')
            .then(response => {
                setPayments(response.data);
            })
            .catch(error => {
                console.error('Error fetching payment history:', error);
            });
    }, []);

    return (
        <div>
            <h2>Payment History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td>{new Date(payment.date).toLocaleDateString()}</td>
                            <td>${payment.amount.toFixed(2)}</td>
                            <td>{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;