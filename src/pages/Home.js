import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {
    const [users, setUser] = useState([])
    const {id} =useParams()
    
    useEffect(()=>{
       loadUsers();
    },[])

    const loadUsers =async() =>{
        const result =await axios.get("http://localhost:8080/users")
        setUser(result.data)
    }
    const deleteUser =async(id) =>
    {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }
  return (
    
   

    <main>
      <body>
      <p class="hometext">Welcome to the IoTBay Website!</p>
    

    <footer class="site-footer">
        <div class="footer-content">
            <p>&copy; 2024 ISD Vantablack</p> 
            <ul class="footer-links">
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="/adminPage">Admin Login</a></li>
            </ul>
        </div>
    </footer>
</body>
 </main>       
  )
}
