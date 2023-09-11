import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";


const MainContainer = ()=>{
    return (
        <>
        <div className="spot"><h2>Spotify Playlist</h2></div>
        <div className="collage1">
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
            <Card4></Card4>
        </div> 
        <div className="collage2">   
            <Card5></Card5>
            <Card6></Card6>
            <Card7></Card7>
            <Card8></Card8>
        </div>
        </>
    );
}
export default MainContainer;