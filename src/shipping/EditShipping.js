import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";


export default function EditShipping() {
    let navigate = useNavigate();
    const {id} =useParams()

    const [address, setaddress] = useState({
        id: "",
        country: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
      });
      const [error, setError] = useState(false);
      const onInputChange = (e) => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setaddress({ ...address, [e.target.name]: value });
      };
      useEffect(() => {
        loadAddress();
      }, []);
      
      const onSubmit = async (e) => {
        e.preventDefault();
    
        // Check if all fields are filled Aout
        if (
          !address.id ||
          !address.country||
          !address.street||
          !address.city||
          !address.state ||
          !address.zipCode 
        ) {
          setError(true); // Set error state to true
          return;
        }
    
        // If everything is filled out, make the API call
        try {
          await axios.put(`http://localhost:8080/address/${id}`, address);
          navigate("/address");
        } catch (error) {
          // Handle the error appropriately
          console.error("There was an error submitting the form:", error);
        }
      };
      const loadAddress = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/address/${id}`);
            setaddress(result.data);
        } catch (error) {
            console.error("Failed to load address:", error);
            setError(true);  // Optionally handle errors more visibly in the UI
        }
    }
    
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Edit address</h2>
              {error && (
                <div className="alert alert-danger" role="alert">
                  All fields are required.
                </div>
              )}
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !address.id ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your id"
                    name="id"
                    value={address.id}
                    onChange={onInputChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                  Country
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !address.country ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your country"
                    name="country"
                    value={address.country}
                    onChange={onInputChange}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="street" className="form-label">
                  Street
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !address.street ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your street"
                    name="street"
                    value={address.street}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                  City
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !address.city ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your city"
                    name="city"
                    value={address.city}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                  State
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !address.state ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your state"
                    name="state"
                    value={address.state}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="zipCode" className="form-label">
                  Zip Code
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !address.zipCode ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your zipCode"
                    name="zipCode"
                    value={address.zipCode}
                    onChange={onInputChange}
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                {/* Cancel link */}
                <Link className="btn btn-danger btn-block mx-2" to="/address">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
  )
}
