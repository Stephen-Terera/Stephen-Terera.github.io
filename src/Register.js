import React from 'react';
import './css/App.css';
import logo from "./images/Removebg_logo.png"
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform authentication here (e.g., check username and password)
    // If successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div class="login-box">
         <div class="img-container">
            <img src={logo}alt="ignition-alliance-logo" class="logo"/>
        </div>
        <form onSubmit={handleLogin}class="login">
            <input type="text" placeholder="First Name"/>

            <input type="text" placeholder="Last Name" name="lname" required/>

            <input type="email" placeholder="Email Address" required/>

            <input type="password" name="psw"  placeholder="New Password" required/>

            <input type="password" name="cpsw" placeholder="Confirm New Password" required/>

            <a href="homepage.html">
                <button type="submit" class="login-button">Sign Up </button>
            </a>

    
        </form>
    </div>
 
  );
};

export default Register;