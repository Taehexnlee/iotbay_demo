import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Address() {
    const [addresses, setAddresses] = useState([]); // Use plural to denote an array of addresses

    useEffect(() => {
        loadAddresses(); // Renamed for clarity
    }, []);

    const loadAddresses = async () => {
        try {
            const result = await axios.get("http://localhost:8080/addresses");
            setAddresses(result.data); // Assuming result.data is an array of address objects
        } catch (error) {
            console.error("Failed to fetch addresses:", error);
        }
    };

    const deleteAddress = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/address/${id}`);
            loadAddresses(); // Refresh the list after deleting
        } catch (error) {
            console.error("Failed to delete address:", error);
        }
    };

    return (
        <div className='container'>
            <div className='py-4'>
            <Link to="/addaddress" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', fontWeight: 'bold' }} className="login-button view-logs-button">Add Address</Link>

                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Country</th>
                            <th scope="col">Street</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Zip Code</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addresses.map((address, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{address.country}</td>
                                <td>{address.street}</td>
                                <td>{address.city}</td>
                                <td>{address.state}</td>
                                <td>{address.zipCode}</td>
                                <td>
                                <Link className='btn btn-primary mx-2' to={`/address/view/${address.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2' to={`/address/edit/${address.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteAddress(address.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
