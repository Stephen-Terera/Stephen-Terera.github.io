// UserTile.js
//<a href="https://www.flaticon.com/free-icons/more" title="more icons">More icons created by Smartline - Flaticon</a>
import React from 'react';
import "./css/pages.css"
import "./css/tiles.css"
import info from './images/three_dots_icon.png';
import info2 from './images/three-dots.png'
//import './UserTile.css'; // Optional: for custom styling

const UserTile = ({ user }) => {
  return (
    <div className="user-tile">
      <div className="user-tile__header">
        <button class="more-info"><img class="more-info-pic"src={info2}></img></button>
        <h4> Username<br></br> <div class="field-values"> {user.name} </div></h4>
        <h4>User ID<br></br> <div class="field-values">{user.id}</div> </h4> 
      </div>
      <div className="user-tile__body">
        <p class="user-tile-boy-p"> Email<br></br> <div class="field-values">{user.email} </div></p> 
        <p class="user-tile-boy-p"> Status:<br></br> <div class="field-values">{user.status} </div></p>
        <p class="user-tile-boy-p"> Role <br></br><div class="field-values"> </div></p>
        <p class="user-tile-boy-p"> Currency <br></br> <div class="field-values"> $$$$</div></p>
        <p class="user-tile-boy-p"> Pending Commmision <br></br><div class="field-values">$$$$ </div></p>
        <p class="user-tile-boy-p"> Availble Commmision <br></br><div class="field-values">$$$$$ </div></p>
      </div>
    </div>
  );
};

export default UserTile;
