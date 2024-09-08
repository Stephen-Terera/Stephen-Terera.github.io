
import React, { View } from 'react';
import "../css/dashboard-components.css";
import achievement from '../images/achievements-badge.png'



export default function ProgressComponent() {
  
    return (
      <div className="progress-overview">
        <h4> Progress Overview: </h4>
        <progress  className="progress-bar" value={75} max={100} />
        <p>Recent Activity: <br/>-Completed Modules: $0 <br/> -Submitted Assignment: $0</p>
        <h4>Achievements: <br/></h4>
        <img
        src={achievement}
        alt='achievement badge'
        className='achievement-badge'/>


      </div>

    );
  }