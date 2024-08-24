import "./css/pages.css";
import "./css/tiles.css";
import info from "./images/three_dots_icon.png";
import React, { useState } from "react";

const UserTile = ({ user }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };



  return (
    <div className="user-tile">
      {isVisible ?  (
        <div class="user-info">
          <button className="more-info" onClick={toggleVisibility}>
            <img className="more-info-pic" src={info} alt="More Info" />
          </button>
          <div className="user-tile__header">
            <h4>
              Username<br />
              <div className="field-values">{user.name}</div>
            </h4>
            <h4>
              User ID<br />
              <div className="field-values">{user.id}</div>
            </h4>
          </div>
          <div className="user-tile__body">
            <p className="user-tile-boy-p">
              Email<br />
              <div className="field-values">{user.email}</div>
            </p>
            <p className="user-tile-boy-p">
              Status:<br />
              <div className="field-values">{user.status}</div>
            </p>
            <p className="user-tile-boy-p">
              Role<br />
              <div className="field-values"></div>
            </p>
            <p className="user-tile-boy-p">
              Currency<br />
              <div className="field-values">$$$$</div>
            </p>
            <p className="user-tile-boy-p">
              Pending Commission<br />
              <div className="field-values">$$$$</div>
            </p>
            <p className="user-tile-boy-p">
              Available Commission<br />
              <div className="field-values">$$$$$</div>
            </p>
          </div>
        </div>
        ):(
          <div class="info-tile"> 
          <button class="back-option "onClick={toggleVisibility}> 🔙 Back</button>
          <button class="info-options"> 🪪 View e-card</button>
          <button class="info-options"> 👁️ View</button> 
          <button class="info-options"> 💰 Wallets </button> 
          <button class="info-options">  💬 Message</button>
          <button class="info-options"> 🔁 Transfer </button> 
          <button class="info-options delete">  🗑️ Delete </button>
          </div>

        )}
    </div>
  );
};

export default UserTile;
