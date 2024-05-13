import React from 'react'
import { Link } from 'react-router-dom'

export default function PaymentSuccess() {
  return (
    <div className='container'>
      <div className='py-4'>
        <header>
         
        </header>

        <main>
          <p class="hometext">Saving details successful!</p>
          <Link to="/accountPage" className="btn btn-success w-100">Go back to My Account</Link>
        </main>

      </div>
    </div>
  )
}
