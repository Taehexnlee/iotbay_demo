<<<<<<< Updated upstream
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser] =useState({
        name: "" ,
        username:""
        ,email:""
    })

    const {id} =useParams();

    useEffect(()=> {
        loadUsers()
    },[])

    const loadUsers = async() => 
    {
        const result =await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Detail User </h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of User id: {user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>User Name: </b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email: </b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to ={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}
=======
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
      <h2>Account Details</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            Email: {user.email} <br />
            First Name: {user.firstName} <br />
            Last Name: {user.lastName} <br />
            Date of Birth:{user.dob} <br />
            Password: {user.password} <br />
            Phone Number: {user.phoneNumber} <br />
            Street Number: {user.streetNumber} <br />
            Post Code: {user.postCode} <br />
            Gender: {user.gender} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;

>>>>>>> Stashed changes
