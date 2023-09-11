import React from "react";
import Cover4 from './Cover/cover4.jpg';
import play from './Icons/play-icon.png';

const Card4 = ()=>{
    return(
        <>
          <div className="card1-container">
            <div className="cov-con"><img src={Cover4}  alt="cover1" className="cover1-img"></img></div>
            <div className="play-con"><img src={play} alt="play" className="play1"></img></div>
            <div className="title">Jazz Hits</div>
            <div className="cap">Lorem ipsum dolor sit amet.</div>
            
          </div> 
        </>
    );
}
export default Card4;