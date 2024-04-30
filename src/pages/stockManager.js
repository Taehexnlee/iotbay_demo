import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminView() {
  return (
    <div className='container'>
      <div className='py-4'>
        <header>
         
        </header>

        <main>
        <body>
    
    <h1>Stock Manager</h1>
    <h2 class="welcAdm">Welcome, Admin Name</h2>

    <div class="search-bar">
    <form action="#">
      <input type="text" placeholder="Search..." name="search"/>
      <button type="submit">Search</button>
    </form>
  </div>

    <div class="stock-table">
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product A</td>
                    <td>ABC123</td>
                    <td>$19.99</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>Product B</td>
                    <td>XYZ987</td>
                    <td>$35.50</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>add more products</td>
                    <td>add as many as we have below</td>
                    <td>$X.X</td>
                    <td>X</td>
                </tr>
            </tbody>
        </table>
    </div>

</body>
        </main>

        <footer class="site-footer">
        <div class="footer-content">
            <p>&copy; 2024 ISD Vantablack</p> 
            <ul class="footer-links">
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="/adminPage">Admin Page</a></li>
            </ul>
        </div>
    </footer>

      </div>
    </div>
  )
}
