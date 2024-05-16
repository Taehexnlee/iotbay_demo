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

    const updateProduct = async (product) => {
        try {
            const response = await axios.put(`http://localhost:8080/products/${product.productId}`, product);
            if (response.status === 200) {
                const updatedProducts = products.map(p =>
                    p.productId === product.productId ? product : p
                );
                setProducts(updatedProducts);
                alert("Update successfully!");
            } else {
                throw new Error("Failed to update product");
            }
        } catch (error) {
            console.error("Failed to update product:", error);
            alert("Update failed!");
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

    const handleInputChange = (e, product, key) => {
        const newValue = key === 'productPrice' ? parseFloat(e.target.value) : e.target.value;
        const updatedProduct = { ...product, [key]: newValue };
        setProducts(products.map(p => p.productId === product.productId ? updatedProduct : p));
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
                            <button onClick={() => handleSort('productName')}>Product Name (sort ↨)</button>
                        </th>
                        <th>
                            <button onClick={() => handleSort('productPrice')}>Product Price (sort ↨)</button>
                        </th>
                        <th>
                            <button onClick={() => handleSort('productCategory')}>Product Category (sort ↨)</button>
                        </th>
                        <th>
                            <button onClick={() => handleSort('soh')}>Quantity (sort ↨)</button>
                        </th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayedProducts.map(product => (
                        <tr key={product.productId}>
                            <td>
                                <input
                                    type="text"
                                    value={product.productName}
                                    onChange={(e) => handleInputChange(e, product, 'productName')}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.productPrice}
                                    onChange={(e) => handleInputChange(e, product, 'productPrice')}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={product.productCategory}
                                    onChange={(e) => handleInputChange(e, product, 'productCategory')}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={product.soh}
                                    onChange={(e) => handleInputChange(e, product, 'soh')}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => updateProduct(product)}
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
