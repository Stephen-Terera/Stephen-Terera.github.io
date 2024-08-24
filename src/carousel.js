import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import new_player_icon from './images/new_players_icon.webp';
import players_icon from './images/players_icon.webp';
import profit from './images/profit.png';
import current from './images/curren_money.png';



export default function PlayerCarousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <div>
            <div class="tile">
              <img src={new_player_icon} class="tile-icon"></img>
              <div class="tile-content">
                <h4>Registered Players. </h4>
                <p > # of Registerd Players. </p>
              </div>   
            </div>
            
            <div class="tile">
              <img src={players_icon} class="tile-icon"></img>
              <div class="tile-content">
                <h4>All Players</h4>
                <p > # of All Players</p>
              </div>
              
            </div>
          
        </div>

        <div>
          <div class="tile">
            <img src={profit} class="tile-icon" ></img>
            <div class="tile-content"> 
              <h4>Commisions for yesterday</h4> 
              <p >$$$ </p>
            </div>
            
          </div>

          <div class="tile">
            <img src={current} class="tile-icon"></img> 
            <div class="tile-content"> 
              <h4>Current Month</h4> 
              <p >$$$ </p>
            </div>
           
          </div>
          
        </div>
      </Slider>
    );
  }