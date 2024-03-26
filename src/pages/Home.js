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
  
      <section class="page-links">
        <a href="/">Home</a>
        <Link to={`/hardwareHome`}>Hardware Prodcuts</Link>
        <Link to={`/softwareHome`}>Software Products</Link>
        <Link to={`/aboutUs`}>About us</Link>
      </section>
    </header>

    <main>
      <p class="hometext">Lets go babyyyy</p>
    </main>

    <footer>
      <p class="copyright">Vantablack Group 2024</p>
    </footer>

        {/* <table className="table border shadow ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  users.map((user,index)=>(
                      <tr>
                      <th scope="row"ket={index}>{index+1}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                          <Link className='btn btn-primary mx-2'to ={`/viewuser/${user.id}`} >View</Link>
                          <Link className='btn btn-primary mx-2' to ={`/edituser/${user.id}`}>Edit</Link>
                          <button className='btn btn-dager mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
                      </td>
                      </tr>
                  ))
              }
              
            </tbody>
         </table> */}
        </div>
    </div>
  )
}
