import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminView() {
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState({
        column: null,
        direction: 'asc'
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        let filteredProducts = [...products];
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product =>
                product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.productCategory.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        filteredProducts = sortProducts(filteredProducts);
        setDisplayedProducts(filteredProducts);
    }, [searchTerm, products, sortOrder]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/products");
            if (response.status === 200) {
                setProducts(response.data);
            } else {
                throw new Error("Failed to fetch products");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateStock = async (productId, newQuantity) => {
        try {
            const response = await axios.put(`http://localhost:8080/products/${productId}/stock`, { quantity: newQuantity });
            if (response.status === 200) {
                const updatedProducts = products.map(product =>
                    product.productId === productId ? { ...product, soh: newQuantity } : product
                );
                setProducts(updatedProducts);
                alert("Update successfully!");
            } else {
                throw new Error("Failed to update stock");
            }
        } catch (error) {
            console.error("Failed to update stock:", error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/products/${productId}`);
            if (response.status === 200) {
                const updatedProducts = products.filter(product => product.productId !== productId);
                setProducts(updatedProducts);
            } else {
                throw new Error("Failed to delete product");
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (column) => {
        const newDirection = sortOrder.column === column && sortOrder.direction === 'asc' ? 'desc' : 'asc';
        setSortOrder({ column, direction: newDirection });
    };

    const sortProducts = (productsToSort) => {
        return productsToSort.sort((a, b) => {
            const columnA = sortOrder.column === 'price' ? parseFloat(a[sortOrder.column].replace('$', '')) : a[sortOrder.column];
            const columnB = sortOrder.column === 'price' ? parseFloat(b[sortOrder.column].replace('$', '')) : b[sortOrder.column];
            return sortOrder.direction === 'asc' ? columnA - columnB : columnB - columnA;
        });
    };

    return (
        <main>
            <body className='bodymainCSS'>
            <h1>Stock Manager</h1>
            <h2 className="welcAdm">Welcome to Admin page</h2>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Link to="/AddProduct">
                    <button>Add Product</button>
                </Link>
            </div>

            <div className="stock-table">
                <table>
                    <thead>
                    <tr>
                        <th>
                            <button onClick={() => handleSort('name')}>Product Name (sort ↨)</button>
                        </th>
                        <th>
                            <button onClick={() => handleSort('id')}>Product Price (sort ↨)</button>
                        </th>
                        <th>
                            <button onClick={() => handleSort('price')}>Product Category (sort ↨)</button>
                        </th>
                        <th>
                            <button onClick={() => handleSort('quantity')}>Quantity (sort ↨)</button>
                        </th>
                        <th>Add to website</th>
                        <th>Delete from website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayedProducts.map(product => (
                        <tr key={product.productId}>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td>{product.productCategory}</td>
                            <td>
                                <input
                                    type="number"
                                    defaultValue={product.soh}
                                    onChange={(e) => product.soh = e.target.value}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => updateStock(product.productId, product.soh)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteProduct(product.productId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </body>
        </main>
    );
}
