import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AddProduct() {
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [soh, setSoh] = useState('');
    const [soo, setSoo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/products', {
                productName,
                productImage,
                productPrice,
                productCategory,
                soh,
                soo
            });
            if (response.status === 200) {
                alert('Product added successfully!');
                // Reset form or redirect to another page
            } else {
                throw new Error('Failed to add product');
            }
        } catch (error) {
            alert('Error adding product: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Product Image URL:
                    <input
                        type="text"
                        value={productImage}
                        onChange={e => setProductImage(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Product Price:
                    <input
                        type="text"
                        value={productPrice}
                        onChange={e => setProductPrice(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Product Category:
                    <input
                        type="text"
                        value={productCategory}
                        onChange={e => setProductCategory(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Stock on Hand (SOH):
                    <input
                        type="number"
                        value={soh}
                        onChange={e => setSoh(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Product</button>
            </form>
            <Link to="/stockManager">Back to Manage Page</Link>
        </div>
    );
}
