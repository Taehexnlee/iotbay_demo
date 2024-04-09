import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function AddUser() {
    let navigate = useNavigate()

    const [user,setUser] =useState({
        email :"",
        firstName: "",
        lastName: "",
        dob: "",
        password: "",
        phoneNumber: "",
        streetNumber: "",
        postCode: "",
        gender: "",
        terms: ""
    })

    const{email,firstName,lastName,dob,password,phoneNumber,streetNumber,postCode,gender,terms} =user
    
    const onInputChange =(e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit =async(e) =>{
        e.preventDefault();

        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register User </h2>
                <h5>All fields are required</h5>
                <form onSubmit={(e)=> onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input type={"email"}
                            className='form-control'
                            placeholder='Enter your email'
                            name='email'
                            value={email}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='FirstName' className='form-label'>
                        First Name
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Enter your first name'
                            name='firstName'
                            value={firstName}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Lastname' className='form-label'>
                        Last Name
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Enter your last name'
                            name='lastName'
                            required
                            value={lastName}
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='DOB' className='form-label'>
                    Date of Birth
                    </label>
                    <input type={"date"}
                            className='form-control'
                            placeholder='Enter your DOB'
                            name='dob'
                            value={dob}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Password' className='form-label'>
                    Password
                    </label>
                    <input type={"password"}
                            className='form-control'
                            placeholder='Enter your password'
                            name='password'
                            value={password}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='PhoneNumber' className='form-label'>
                    Phone Number
                    </label>
                    <input type={"number"}
                            className='form-control'
                            placeholder='Enter your phone number'
                            name='phoneNumber'
                            value={phoneNumber}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='streetNumber' className='form-label'>
                    Street Number
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Enter your street Number'
                            name='streetNumber'
                            value={streetNumber}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='postCode' className='form-label'>
                    Post Code
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Enter your post Code'
                            name='postCode'
                            value={postCode}
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='gender' className='form-label'>
                    Gender
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Select your gender'
                            name='gender'
                            value={gender}
                            onChange={(e)=>onInputChange(e)}/>
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                    <input type={"checkbox"}
                            className='form-control'
                            name='terms'
                            value={terms}
                            required
                            onChange={(e)=>onInputChange(e)}/>
                            Agree to 
                            <a href="./TOSPage.html" target="_blank">TOS</a>
                    </label>
                    
                </div> */}
              
                <button type ="submit" className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to="/">cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
