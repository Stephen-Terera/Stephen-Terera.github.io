// App.js
import React, { useState } from 'react';
import Tabs from './Tabs';
import ResultsTable from './ResultsTables';
import Header from './Header';
import Footer from './Footer';
import "./css/pages.css"

const Tools = () => {
  // Example data for different tables
  const usersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', status: 'Pending' },
  ].map(user => ({ user }));

  const adminsData = [
    { id: 1, name: 'Admin One', email: 'admin1@example.com', status: 'Active' },
    { id: 2, name: 'Admin Two', email: 'admin2@example.com', status: 'Inactive' },
  ].map(user => ({ user }));

  const guestsData = [
    { id: 1, name: 'Guest User', email: 'guest@example.com', status: 'Guest' },
  ].map(user => ({ user }));

  // Define tabs with labels and corresponding table content
  const tabs = [
    { label: 'Link Creator', content: <ResultsTable data={usersData} /> },
    { label: 'Marketing Sources', content: <ResultsTable data={adminsData} /> },
    { label: 'Landing Pages', content: <ResultsTable data={guestsData} /> },
  ];

  return (
    <div className="App">
      <div class="main">
 
        <Header />
        <Tabs tabs={tabs} />
      </div>
      <Footer /> 
    </div>
  );
};

export default Tools;
