import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    password: "",
    phoneNumber: "",
    streetNumber: "",
    postCode: "",
    gender: "",
    card: "",
    expiration: "",
    cvv: "",
    terms: false,
  });

  const [error, setError] = useState(false);

  const onInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (
      !user.email ||
      !user.firstName ||
      !user.lastName ||
      !user.dob ||
      !user.password ||
      !user.phoneNumber ||
      !user.streetNumber ||
      !user.postCode ||
      !user.gender ||
      !user.card ||
      !user.expiration ||
      !user.cvv ||
      !user.terms
    ) {
      setError(true); // Set error state to true
      return;
    }

    // If everything is filled out, make the API call
    try {
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
    } catch (error) {
      // Handle the error appropriately
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <main>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Register User</h2>
              {error && (
                <div className="alert alert-danger" role="alert">
                  All fields are required.
                </div>
              )}
              <form onSubmit={onSubmit}>
                {/* Repeated structure for each input field */}
                {/* Email input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      error && !user.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your email"
                    name="email"
                    value={user.email}
                    onChange={onInputChange}
                  />
                </div>
                {/* First Name input */}
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !user.firstName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your first name"
                    name="firstName"
                    value={user.firstName}
                    onChange={onInputChange}
                  />
                </div>
                {/* Last Name input */}
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !user.lastName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      error && !user.dob ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your DOB"
                    name="dob"
                    value={user.dob}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      error && !user.password ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your password"
                    name="password"
                    value={user.password}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      error && !user.phoneNumber ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="streetNumber" className="form-label">
                    Street Number
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !user.streetNumber ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your street Number"
                    name="streetNumber"
                    value={user.streetNumber}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="postCode" className="form-label">
                    Post Code
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !user.postCode ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your post Code"
                    name="postCode"
                    value={user.postCode}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className={`form-control ${
                      error && !user.gender ? "is-invalid" : ""
                    }`}
                    name="gender"
                    value={user.gender}
                    onChange={onInputChange}
                  >
                    <option value="" disabled>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="card" className="form-label">
                    Credit Card Number
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !user.card ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your credit card number"
                    name="card"
                    value={user.card}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      error && !user.expiration ? "is-invalid" : ""
                    }`}
                    name="expiration"
                    value={user.expiration}
                    onChange={onInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      error && !user.cvv ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your CVV"
                    name="cvv"
                    value={user.cvv}
                    onChange={onInputChange}
                  />
                </div>

                {/* Terms checkbox */}
                <div className="mb-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className={`form-check-input ${
                      error && !user.terms ? "is-invalid" : ""
                    }`}
                    name="terms"
                    checked={user.terms}
                    onChange={onInputChange}
                  />
                  <label htmlFor="terms" className="form-check-label">
                    Agree to
                    <a href="./TOSPage.html" target="_blank">
                      TOS
                    </a>
                  </label>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                {/* Cancel link */}
                <Link className="btn btn-danger btn-block mx-2" to="/">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
   
      </body>
      <footer class="site-footer">
        <div class="footer-content">
          <p>&copy; 2024 ISD Vantablack</p>
          <ul class="footer-links">
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="/adminPage">Admin Login</a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
