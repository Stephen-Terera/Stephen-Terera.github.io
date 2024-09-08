
import React, { View } from 'react';
import "../css/dashboard-components.css";
import achievement from '../images/achievements-badge.png'



export default function TodoComponent() {
  
    return (
      <div className="to-do-component">
       <h2> To-Do List</h2> 
       <p>- Complete Quiz 1</p>
       <p>- Review module</p> 

       <h4>Recent Message</h4> 
       <p> New Message from instructor</p> 
       <p> Reply to forum post </p> 
      </div>

    );
  }