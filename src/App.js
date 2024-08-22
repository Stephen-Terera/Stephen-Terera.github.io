import logo from './images/logo.svg';
import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Register from "./Register.js"
import Network from './Network.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/network" element={<Network /> } /> 
      </Routes>
    </Router>
  );
}

export default App;
