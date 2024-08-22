// UserTile.js
import React from 'react';
import "./css/pages.css"
import "./css/tiles.css"
//import './UserTile.css'; // Optional: for custom styling

const UserTile = ({ user }) => {
  return (
    <div className="user-tile">
      <div className="user-tile__header">
        <h4> Username<br></br> {user.name}</h4>
        <h4>User ID<br></br>{user.id}</h4> 
      </div>
      <div className="user-tile__body">
        <p class="user-tile-boy-p"> Email<br></br> {user.email}</p> 
        <p class="user-tile-boy-p"> Status:<br></br> {user.status}</p>
        <p class="user-tile-boy-p"> Role <br></br></p>
        <p class="user-tile-boy-p"> Currency <br></br> $$$$</p>
        <p class="user-tile-boy-p"> Pending Commmision <br></br>$$$$</p>
        <p class="user-tile-boy-p"> Availble Commmision <br></br>$$$$$</p>
      </div>
    </div>
  );
};

export default UserTile;
