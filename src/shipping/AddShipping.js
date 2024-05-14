import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddShipping() {
    let navigate = useNavigate();

    const [address, setAddress] = useState({
        country: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    });
    const [error, setError] = useState(false);

    const onInputChange = (e) => {
        setAddress({...address, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!address.country || !address.street || !address.city || !address.state || !address.zipCode) {
            setError(true);
            return; // Validation failed
        }
        setError(false); // Reset error state on successful validation

        try {
            await axios.post("http://localhost:8080/address", address);
            navigate("/address"); // Navigate on successful POST
        } catch (error) {
            console.error("Failed to submit address:", error);
            setError(true); // Set error state if the API call fails
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Address</h2>
                    
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" className="form-control" name="country" value={address.country} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">Street</label>
                            <input type="text" className="form-control" name="street" value={address.street} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" value={address.city} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control" name="state" value={address.state} onChange={onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="zipCode" className="form-label">Zip Code</label>
                            <input type="text" className="form-control" name="zipCode" value={address.zipCode} onChange={onInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
