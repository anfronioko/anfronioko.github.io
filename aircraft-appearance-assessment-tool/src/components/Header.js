import React from 'react';
import "./Header.css";
import logo from "./../pictures/2023-01-united-airlines-quality-assurance-logo.png";

function Header() {
    return  (
        <div id="header">
            <img src={logo}/>
            <button id="upload-button">Upload</button>
        </div>
    )
}

export default Header;