
import React, { View } from 'react';
import "../css/dashboard-components.css";



export default function EventComponent() {
  
    return (
      <div className="event-component">
        <h3>Upcoming Courses</h3>
        <h5>- Event1: Training session on Aug 25</h5>
        <h5>- Event2: Deadline for Assignment on Aug 30 </h5>
      </div>
    );
  }