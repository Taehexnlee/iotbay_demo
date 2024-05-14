import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import validation from "../users/LoginValidation";

export default function Login() {
  localStorage.clear();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // Initialize errors state to also handle authentication errors
  const [errors, setErrors] = useState({ auth: "" });
  const [filteredUsers, setFilteredUsers] = useState([]); // State to store filtered users
  const [userEmail, setUserEmail] = useState("");

  // useEffect to fetch all users from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        console.log("Fetched users from backend:", response.data);
        setFilteredUsers(response.data); // Set filteredUsers with fetched users initially
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // Function to handle input change in the email field
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Filter out users based on the entered email
      const filtered = filteredUsers.filter((user) => user.email === userEmail);
      console.log("Filtered users:", filtered);

      // Assuming successful authentication if filteredUsers is not empty
      if (filtered.length > 0) {
        console.log("Authentication successful");

        // Store login time if needed
        const loginTime = new Date().toString();
        console.log("Login time:", loginTime);
        try {
            const response = await axios.post(`http://localhost:8080/user/${filtered[0].id}/login`, loginTime);
            console.log(response.data); // Log success message
          } catch (error) {
            console.error('Error storing logout time front end:', error);
          }
        localStorage.setItem("user", JSON.stringify(filtered[0])); // Store user data in local storage
        
        // Redirect to welcome page or perform other actions
        navigate("/welcome"); // Navigate to the Welcome page
      } else {
        // Handle authentication failure if no user with the entered email is found
        console.error("Authentication failed: User not found");
      }
    } catch (error) {
      // Handle authentication errors or other errors
      console.error("Error during authentication:", error);
    }
  };

  return (
    <main>
      <body>
    <div className="d-flex justify-content-center align-items-center bg-white">
      <div className="bg-white p-3 row">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(event) => setUserEmail(event.target.value)}
              className="form-control rounded"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          {/* Display authentication error message */}
          {errors.auth && (
            <div className="alert alert-danger" role="alert">
              {errors.auth}
            </div>
          )}
          <button type="submit" className="btn btn-success w-100">
            Log in
          </button>
          <p>You agree to our terms and policies.</p>
          <Link className="btn btn-outline-dark" to={"/adduser"}>
            Register
          </Link>
        </form>
      </div>
    </div>
    </body>
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2024 ISD Vantablack</p>
        <ul className="footer-links">
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="/adminPage">Admin Login</a></li>
        </ul>
      </div>
    </footer>
  </main>
  );
}
