import React from "react";
import './Navbar.css';
import everynewslogo from '../../assets/everynewslogo.png'


function Navbar(){
    return (
        <div className="navbar">
                <div className="navbar-logo">
                    <img src={everynewslogo} alt="everynews-logo" />
                    <h1>Every News</h1>
                </div>
        </div>
    )
}
export default Navbar;