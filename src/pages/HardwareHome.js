import React from 'react'
import { Link } from 'react-router-dom'

export default function HardwareHome() {
  return (
    <div className='container'>
      <div className='py-4'>
        <header>
          
        </header>

        <main>
          <p class="hometext">Hardware Home</p>
          <div class="search-bar">
            <form action="#">
            <input type="text" placeholder="Search..." name="search"/>
            <button type="submit">Search</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
