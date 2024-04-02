import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        navigate('/login'); // Redirect to login if no user data is found
        return null;
    }   

    return (
        <div>
            <h2>Welcome Page</h2>
            <p>Welcome, {user.email}!</p>
            {/* Display more user info here */}
        </div>
    );
};
export default Welcome;