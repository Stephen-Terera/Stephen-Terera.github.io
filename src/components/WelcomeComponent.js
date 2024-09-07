
import React from 'react';
import "../css/dashboard-components.css";



export default function WelcomeComponent() {
  
    return (
      <div className="welcome-message">
        <h2> Welcome, $Name !</h2>
        <h4>Quick Stats: Courses Completed: $courses</h4>
        <h4>Hours Spent: $Hours</h4>
      </div>

    );
  }