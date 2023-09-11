import React from "react";
import Cover3 from './Cover/cover3.jpg';
import play from './Icons/play-icon.png';

const Card3 = ()=>{
    return(
        <>
          <div className="card1-container">
            <div className="cov-con"><img src={Cover3}  alt="cover1" className="cover1-img"></img></div>
            <div className="play-con"><img src={play} alt="play" className="play1"></img></div>
            <div className="title">All Out 2010s</div>
            <div className="cap">Lorem ipsum dolor sit amet.</div>
            
          </div> 
        </>
    );
}
export default Card3;