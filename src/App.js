import logo from './images/logo.svg';
import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import Register from "./pages/Register.js"
import Network from './Network.js';
import Tools from "./Tools.js";
import Withdrawals from './Withdrawls.js';
import MessageBubble from './components/MessageBubble.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/network" element={<Network /> } /> 
        <Route path="/tools" element={<Tools /> } /> 
        <Route path="/withdrawals" element={<Withdrawals /> } /> 
        
      </Routes>
      <MessageBubble />
    </Router>
  );
}

export default App;
