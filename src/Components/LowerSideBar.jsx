import React from "react";
import LibIcon from './Icons/library-icon.png';
import globeIcon from './Icons/globe-icon.png';

const LowerSlideBar = ()=>{
    return (
        <>
            <div className='library'>
                <div className="libCon">
                   <div><img src={LibIcon} alt="libIcon" className="img-lib"></img></div>
                   <div>Your library</div>
                </div>
            </div>    
            <div className='library-con'>    
                <div className='lib-contain'>
                    <div className='create-playlist'>
                        <div>Create your first playlist</div>
                        <div>It's easy,we'll help you</div>
                        <button className="lib-button">Create playList</button>
                    </div>
                    <div className='podcast'>
                        <div>Let's find some podcasts to follow</div>
                        <div>We'll keep you updated on new episodes</div>
                        <button className="lib-button" >Browse podcasts</button>
                    </div>
                </div>    
            </div>
            <div className='about-more'>
                    <div className="more"> 
                        <span>Legal</span>
                        {/* <span>Privacy Centre</span> */}
                        <span>Privacy Policies</span>
                    </div>
                    <div className="more1">
                        <span>Cookies</span>
                        {/* <span>About Ads</span> */}
                        <span>Accessibility</span>
                    </div>
                    {/* <div className="globe-con">
                        <img src={globeIcon} alt="globe" className="globe-img"/>
                         <div>English</div>
                    </div> */}
            </div>
        
        </>

    );
}
export default LowerSlideBar;