import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
    return (
    <div className="header-container">
    <div className="text-ribbon">
        <p className="now-playing">Now Playing:</p>
        <div className="player-container">
            <p>when you die - mgmt</p>
        </div>
     
    </div>    
    </div>
);
}

export default Header;
