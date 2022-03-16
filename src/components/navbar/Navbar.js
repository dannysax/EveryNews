import React from "react";
import './Navbar.css';
import everynewslogo from '../../assets/everynewslogo.png'
import { Link } from "react-router-dom";


function Navbar(){
    return (
        <div className="navbar">
            
                <div className="navbar-logo">
                <Link to="/"> <img src={everynewslogo} alt="everynews-logo" /></Link>
                    <h1>Every News</h1>
                </div>
                
        </div>
    )
}
export default Navbar;