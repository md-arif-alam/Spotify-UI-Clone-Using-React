import React from "react";
import HomeIcon from './Icons/home-icon.png';
import SearchIcon from './Icons/search-icon.png';

const SideBar =()=>{
    return(
        <>
          <div className='upper-sidebar'>
                <div className='home'>
                    <img src={HomeIcon} alt="homeImage" className="img-home"></img>
                    <div>Home</div>
                </div>
                <div className='search'>
                    <img src={SearchIcon} alt="" className="img-search"></img>
                    <div>Search</div>
                </div>
        </div>
        </>
    );
}
export default SideBar;