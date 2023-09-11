import React from "react";
import Cover8 from './Cover/cover8.jpg';
import play from './Icons/play-icon.png';

const Card8 = ()=>{
    return(
        <>
          <div className="card1-container">
            <div className="cov-con"><img src={Cover8}  alt="cover1" className="cover1-img"></img></div>
            <div className="play-con"><img src={play} alt="play" className="play1"></img></div>
            <div className="title">Ed Sheeran</div>
            <div className="cap">Lorem ipsum dolor sit amet.</div>
            
          </div> 
        </>
    );
}
export default Card8;