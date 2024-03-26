import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="IoTBay.png" href = "/" alt="IotBay Logo" class="nav-link active"></img>

 
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-home">
      <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/HardwareHome">Hardware Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/SoftwareHome">Software Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/AboutUs">About Us</a>
      </li>
    </ul>        
      
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <Link class='btn btn-outline-light' to={'/adduser'}>Register</Link>
  </div>
</div>
</nav> 
  )
}
 
