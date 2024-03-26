import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='container'>
      <div className='py-4'>
        <header>
          <section class="page-links">
            <Link to="/">Home</Link>
            <Link className='btn btn-outline-light' to={`/hardwareHome`}>Hardware Prodcuts</Link>
            <Link className='btn btn-outline-light' to={`/softwareHome`}>Software Products</Link>
            <Link className='btn btn-outline-light' to={`/aboutUs`}>About us</Link>
          </section>
        </header>

        <main>
          <p class="hometext">About us</p>
        </main>

      </div>
    </div>
  )
}
