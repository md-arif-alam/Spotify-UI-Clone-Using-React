
import React from 'react';
import Main from './Main';
import './Main.css';
import SideBar from './SideBar';
import './SideBar.css';
import LowerSideBar from './LowerSideBar';
import './LowerSideBar.css';
import Header from './Header';
import './Header.css';
import MainContainer from './MainContainer';
import './MainContainer.css';
import './Card1.css';
// import './Card2.css';
// import './Card3.css';
// import './Card4.css';
// import './Card5.css';
// import './Card6.css';
// import './Card7.css';
// import './Card8.css';
import insta from './Icons/insta-icon.png';
import tweet from './Icons/twitter-icon.png';
import fb from './Icons/facebook-icon.png';



function App() {
  return (
    <>
      <div className='main'>
        
        <Main></Main>
          <div className='sideBar'>
            <SideBar></SideBar>
            <div className='lower-sidebar'>
              <LowerSideBar></LowerSideBar>
            </div>
          </div>
            <Header></Header>   
          {/* <div className='container'> */}
            <div className='main-container'>
              <MainContainer></MainContainer>
            
                <div className='footer-first'>
                  <div className='company'>
                    <div style={{color:"white",fontWeight:"600",marginBottom:"5px"}}>Company</div>
                    <div>About</div>
                    <div>Jobs</div>
                    <div>For the Records</div>
                  </div>

                  <div className='communities'>
                    <div style={{color:"white",fontWeight:"600",marginBottom:"5px"}}>Communities</div>
                    <div>For Artists</div>
                    <div>Developers</div>
                    <div>Advertising</div>
                    <div>Investors</div>
                    <div>Vendors</div>
                  </div>

                  <div className='usefulLinks'>
                      <div style={{color:"white",fontWeight:"600",marginBottom:"5px"}}>Useful links</div>
                      <div>Support</div>
                      <div>Free Mobile App</div>
                  </div>

                  <div className='social-links'>
                    <div className='social-icon'>
                      <img src={insta} alt='insta-logo' className='social-img'></img>
                    </div>
                    <div className='social-icon'>
                    <img src={tweet} alt='tweeter-logo' className='social-img'></img>
                    </div>
                    <div className='social-icon'>
                    <img src={fb} alt='Fb-logo' className='social-img'></img>
                    </div>
                  </div>
                </div>
                <div className='line'></div>
                  <div className='footer-second'>
                    <span>{String.fromCodePoint(0x00A9)}</span> 2023 Spotify AB
                  </div>
            </div>    
          {/* </div>    */}
      </div> 
    </>
  );
}

export default App;
