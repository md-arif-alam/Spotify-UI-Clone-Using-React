import React from "react";
import Cover7 from './Cover/cover7.jpg';
import play from './Icons/play-icon.png';

const Card7 = ()=>{
    return(
        <>
          <div className="card1-container">
            <div className="cov-con"><img src={Cover7}  alt="cover1" className="cover1-img"></img></div>
            <div className="play-con"><img src={play} alt="play" className="play1"></img></div>
            <div className="title">Latest Added</div>
            <div className="cap">Lorem ipsum dolor sit amet.</div>
            
          </div> 
        </>
    );
}
export default Card7;