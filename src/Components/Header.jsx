import React from "react";
import RightIcon from './Icons/right-icon.png';
import LeftIcon from './Icons/left-icon.png';

const Header = ()=>{
    return(
        <>
        <div className='header'>
            <div className="arrow-con">
                <div><img src={LeftIcon} alt="leftIcon" className="arrow-img"/></div>
                <div><img src={RightIcon} alt="rightIcon" className="arrow-img"/></div>
            </div>
            <div className="button">
                <div><button className="sign-but">Sign Up</button></div>
                <div><button className="log-but">Log In</button></div>
            </div>
        </div>

        </>
    );
}
export default Header;