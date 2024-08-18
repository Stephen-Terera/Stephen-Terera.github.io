import React, { useState } from "react";
import "./Header.css";
import logo from "./Removebg_logo.png";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the sidebar
  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      {/* Sidebar toggle button */}
      <button className="openbtn" onClick={openNav}>
        &#9776;
      </button>
      <img
        src={logo}
        alt="ignition-alliance-logo"
        className="header-logo"
      />

      {/* Dropdown menu */}
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">
          👤
        </button>
        {/* Show the dropdown content only if isDropdownOpen is true */}
        {isDropdownOpen && (
          <div id="myDropdown" className="dropdown-content show">
            <a href="#home">My Account</a>
            <a href="#settings">Settings</a>
            <a href="#notifications">Notifications</a>
            <a href="#logout">Log Out</a>
          </div>
        )}
      </div>

      {/* Sidebar navigation */}
      <nav
        id="mySidebar"
        className="sidebar"
        style={{ width: isSidebarOpen ? "250px" : "0" }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <a href="#">Dashboard</a>
        <a href="#">Network</a>
        <a href="#">Tools</a>
        <a href="#">Withdrawals</a>
        <a href="#">Reports</a>
      </nav>
    </header>
  );
}
