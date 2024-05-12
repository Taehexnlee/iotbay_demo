import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function AdminView() {
    const [searchTerm, setSearchTerm] = useState('');
  

const allProducts = [
    { name: "Graphics Card", id: 1, price: "$499.99", quantity: 10 },
    { name: "SSD", id: 2, price: "$92", quantity: 25 },
    { name: "RAM", id: 3, price: "$69", quantity: 30 },
    { name: "Hard-Drive", id: 4, price: "$50", quantity: 15 },
    { name: "CPU", id: 5, price: "$289.99", quantity: 8 },
    { name: "Motherboard", id: 6, price: "$99.99", quantity: 20 },
    { name: "Microsoft Office 365", id: 7, price: "$220", quantity: 50 },
    { name: "Oracle for Business", id: 8, price: "$160", quantity: 40 },
    { name: "Windows 11 Standard Edition", id: 9, price: "$280", quantity: 35 },
    { name: "Windows 11 Pro Edition", id: 10, price: "$350", quantity: 28 },
    { name: "Procurify Services", id: 11, price: "$130", quantity: 60 },
    { name: "Adobe Suite", id: 12, price: "$299.99", quantity: 42 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Initialize with allProducts

  useEffect(() => {
    const newFilteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts); // Filter on every input change
  }, [searchTerm]); // Dependency on searchTerm


  const handleSearch = () => {
    setSearchTerm(''); 
    setFilteredProducts(allProducts); 
  };

  const [sortOrder, setSortOrder] = useState({
    column: null, // Initially, no column is sorted
    direction: 'asc' // Initial direction is ascending
  });

  const handleSort = (column) => {
    if (sortOrder.column === column) {
      // If the same column is clicked, toggle direction
      setSortOrder({ 
        column,
        direction: sortOrder.direction === 'asc' ? 'desc' : 'asc'
      });
    } else {
      // If a different column is clicked, sort ascending by default
      setSortOrder({
        column,
        direction: 'asc'
      });
    }
  };

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    const columnA = sortOrder.column === 'price' 
      ? parseFloat(a[sortOrder.column].replace('$', '')) // Parse price as float
      : a[sortOrder.column];
    const columnB = sortOrder.column === 'price' 
      ? parseFloat(b[sortOrder.column].replace('$', ''))
      : b[sortOrder.column];

    if (columnA < columnB) {
      return sortOrder.direction === 'asc' ? -1 : 1;
    }
    if (columnA > columnB) {
      return sortOrder.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });


  return (
    <main>
      <body className='bodymainCSS'>
        <h1>Stock Manager</h1>
        <h2 className="welcAdm">Welcome, Admin Name</h2>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="stock-table">
        <table>
          <thead>
            <tr>
                <th><button onClick={() => handleSort('name')}>Product Name (sort ↨)</button></th>
                <th><button onClick={() => handleSort('id')}>Product Code (sort ↨)</button></th>
                <th><button onClick={() => handleSort('price')}>Price (sort ↨)</button></th>
                <th><button onClick={() => handleSort('quantity')}>Quantity (sort ↨)</button></th>
                <th>Add to website</th>
                <th>Delete from website</th>
              </tr>
            </thead>
            <tbody>
            {sortedProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.id}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button className="add-button">Add</button>
                  </td>
                  <td>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </body>

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
</main>
)
}
