// Tabs.js
import React, { useState } from 'react';
//import "./css/App.css";
import "./css/tiles.css"

//import './Tabs.css'; // Optional: for custom styling

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__menu">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabs__menu-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__content main-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
