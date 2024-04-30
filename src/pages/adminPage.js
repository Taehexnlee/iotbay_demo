import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPage() {
  return (
    <div className='container'>
      <div className='py-4'>
        <header>
         
        </header>

        <main>
        <body>
    
   
    <h2 class="welcAdm">Welcome, Admin Name</h2>
    <h2>Please Choose an option below:</h2>

    <div class="admin-choice-buttons">
    <a href="/stockManager" class="choice-button">Stock Manager</a>
    <a href="#" class="choice-button">User Data</a>
</div>


</body>
</main>


      </div>
    </div>
  )
}
