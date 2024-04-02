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

    // Example function within your Login component
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/authenticate', user);
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data)); // Example of saving user data
            navigate('/'); // Adjust the route as needed
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Authentication error:", error.response.data);
                setErrors({...errors, auth: "Invalid credentials. Please try again."});
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Network error:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
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
