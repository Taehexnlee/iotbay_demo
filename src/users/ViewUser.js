import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users'); // Endpoint to fetch all users
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

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
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUser;
