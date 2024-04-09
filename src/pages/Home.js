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
    
    <div className='container'>
        <div className='py-4'>
        <header>
        <h1 class="Welcome-Text">Welcome to the IoTBay Website</h1>
    </header>

    <main>
      <p class="hometext">You can browse products, login, or register</p>
    </main>

    <footer>
      <p class="copyright">Vantablack Group 2024</p>
    </footer>

        </div>
    </div>
  )
}
