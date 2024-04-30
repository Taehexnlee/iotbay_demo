import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const userEmail = JSON.parse(localStorage.getItem('user')).email;

    useEffect(() => {
        // Fetch all users from the backend
        axios.get('http://localhost:8080/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    useEffect(() => {
        // Filter out users based on the logged-in user's email
        const filtered = users.filter(user => user.email === userEmail);
        setFilteredUsers(filtered);
    }, [users, userEmail]);

    if (!userEmail) {
        navigate('/login'); // Redirect to login if no user email is found
        return null;
    }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>First Name:</strong> {user.firstName} <br />
            <strong>Last Name:</strong> {user.lastName} <br />
            <strong>Date of Birth:</strong> {user.dob} <br />
            <strong>Password:</strong> {user.password} <br />
            <strong>Phone Number:</strong> {user.phoneNumber} <br />
            <strong>Street Number:</strong> {user.streetNumber} <br />
            <strong>Post Code:</strong> {user.postCode} <br />
            <strong>Gender:</strong> {user.gender} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;
