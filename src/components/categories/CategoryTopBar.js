import React from "react";
import { Link } from "react-router-dom";
import arrow from '../../assets/arrow.png';


function CategoryTopBar({text}){
    return (
        <div className="category-section-top-bar">
        <h1>{text}</h1>
        <div className="category-section-nav">
            <Link to="">More News</Link>
            <img src = {arrow} alt="everynews-nav" />
        </div>
    </div>
    
    )
}
export default CategoryTopBar;