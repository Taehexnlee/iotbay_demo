import axios from 'axios'
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import validation from '../users/LoginValidation';
export default function Login() {
    let navigate = useNavigate()
    const [user,setUser] =useState({
        email :"",
        password: ""
    })
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value }); // Corrected to ensure value is set correctly
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(user);
    
        // Check if the validation returned an empty object, which implies no errors.
        if (Object.keys(validationErrors).length === 0) {
            try {
                // Replace "/user" with "/authenticate" to match the backend endpoint for login.
                const response = await axios.post("http://localhost:8080/authenticate", user);
                
                // Handle response.data which should contain the authentication token or user details.
                console.log("Login successful:", response.data);
                // For example, you might want to store the token in localStorage and navigate to the home page.
                // localStorage.setItem('token', response.data.token);
                
                navigate("/"); // Navigate to the home page after successful login.
            } catch (error) {
                // If there's an error (e.g., 401 Unauthorized), handle it here.
                console.error("Login error:", error);
                setErrors({ ...errors, auth: "Login failed. Please check your credentials." });
            }
        } else {
            // If validation errors exist, update the errors state which will show the error messages on the form.
            setErrors(validationErrors);
        }
    };
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg white p-3 row'>
            <form action='' onSubmit={handleSubmit}>
                <div className='md-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded'/>
                    {errors.email && <span className='text-danger'> {errors.email} </span>}
                </div>
                <div className='md-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded'/>
                    {errors.password && <span className='text-danger'> {errors.password} </span>}
                </div>
                <button type='submit' className='btn btn-success w-100'>Log in</button>
                <p>You are agree to out terms and policies</p>
                <Link className='btn btn-outline-light' to={'/adduser'}>Register</Link>
            </form>
        </div>
    </div>
  )
}
