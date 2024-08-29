import "../css/pages.css";
import "../css/tiles.css";
import info from "../images/three_dots_icon.png";
import React, { useState } from "react";

const UserTile = ({ user }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };


  return (
    <div className="user-tile">
      {!isPopupVisible ?  (
        <div class="user-info">
          <button className="more-info" onClick={togglePopup}>
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
          <div className="popup-overlay">
          <div className="popup-content ">
            <button class="info-options"> View-Card</button>
            <button class="info-options"> Login </button>
            <button class="info-options">View</button>
            <button class="info-options">Wallets </button> 
            <button class="info-options"> Note </button> 
            <button class="info-options"> Message </button> 
            <button class="info-options"> Transfer </button> 
            <button class="info-options delete"> Delete </button>   
            
            <button type="button "class="close" onClick={togglePopup}>Close</button>
          </div>
        </div>

        )}
    </div>
  );
};

export default UserTile;
