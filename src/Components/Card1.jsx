import React from "react";
import Cover1 from './Cover/cover1.jpg';
import play from './Icons/play-icon.png';

const Card1 = ()=>{
    return(
        <>
          <div className="card1-container">
            <div className="cov-con"><img src={Cover1}  alt="cover1" className="cover1-img"></img></div>
            <div className="play-con"><img src={play} alt="play" className="play1"></img></div>
            <div className="title">Today's Top Hits</div>
            <div className="cap">Lorem ipsum dolor sit amet.</div>
            
          </div> 
        </>
    );
}
export default Card1;