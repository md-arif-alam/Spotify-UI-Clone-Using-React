import React from "react";
import Cover6 from './Cover/cover6.jpg';
import play from './Icons/play-icon.png';

const Card6 = ()=>{
    return(
        <>
          <div className="card1-container">
            <div className="cov-con"><img src={Cover6}  alt="cover1" className="cover1-img"></img></div>
            <div className="play-con"><img src={play} alt="play" className="play1"></img></div>
            <div className="title">Trending Songs</div>
            <div className="cap">Lorem ipsum dolor sit amet.</div>
            
          </div> 
        </>
    );
}
export default Card6;