import React from 'react';
import './css/App.css';
import logo from "./images/Removebg_logo.png"
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform authentication here (e.g., check username and password)
    // If successful, navigate to the dashboard
    navigate('/dashboard');
  };

    const handleRegister = (event)=> {
        event.preventDefault();

        navigate('/register');
    }
  return (
    <div class="login-box">

        <div class="img-container">
            <img src={logo}alt="ignition-alliance-logo" class="logo"/>
        </div>

        <form onSubmit={handleLogin}class="login">
            <input type="text" placeholder="Username"/>

            <input type="password" placeholder="Password" name="psw" required/>
            
            <a href="homepage.html">
                <button type="submit" class="login-button">Login</button>
            </a>
            

            <div>
                <p class="register-text">Not Registered ?</p>
                <a href="register.html">
                    <button onClick={handleRegister} class="login-button">Register</button>
                </a>
                
            </div>

        </form>

    </div>
  );
};

export default Login;