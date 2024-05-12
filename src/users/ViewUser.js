import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const userEmail = JSON.parse(localStorage.getItem("user"))?.email; // Null check added here
  

  useEffect(() => {
    // Fetch all users from the backend
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        console.log("Fetched users from backend:", response.data); // Log the fetched user data
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    // Filter out users based on the logged-in user's email
    const filtered = users.filter((user) => user.email === userEmail);
    setFilteredUsers(filtered);
  }, [users, userEmail]);

  if (!userEmail) {
    navigate("/login"); // Redirect to login if no user email is found
    return null;
  }

  return (
    <div>
      <h2>Account Details For {userEmail}</h2>
      <ul class="accountDetails">
        {filteredUsers.map((user) => (
          <li key={user.id}>
            User ID: {user.id} <br />
            First Name: {user.firstName} <br />
            Last Name: {user.lastName} <br />
            Date of Birth:{user.dob} <br />
            Password: {user.password} <br />
            Phone Number: {user.phoneNumber} <br />
            Street Number: {user.streetNumber} <br />
            Post Code: {user.postCode} <br />
            Gender: {user.gender} <br />
            Credit Card: {user.card} <br />
            Expiration: {user.expiration} <br />
            Cvv: {user.cvv} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;

