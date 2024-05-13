import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ViewShipping() {
  const [address, setAddress] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadAddress = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/address/${id}`);
        setAddress(result.data);
      } catch (error) {
        console.error("Failed to fetch address:", error);
      }
    };

    loadAddress();
  }, [id]); // Ensure useEffect re-runs if id changes

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Address Details</h2>
          <div className='card'>
            <div className='card-header'>
              Details of user id: {address.id}
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Country:</b> {address.country}</li>
                <li className='list-group-item'><b>City:</b> {address.city}</li>
                <li className='list-group-item'><b>State:</b> {address.state}</li>
                <li className='list-group-item'><b>Street:</b> {address.street}</li>
                <li className='list-group-item'><b>Zip Code:</b> {address.zipCode}</li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to="/address">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
