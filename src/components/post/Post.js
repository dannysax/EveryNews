import React from "react";
import { Link } from "react-router-dom";
import './Post.css';



function Post({posts}){
    return (
        <div className="post-card">
            <Link to="">
            <img src = "https://source.unsplash.com/random" alt="everydaynews" /></Link>
            <h2>{posts.title.rendered.slice(0,50)}...</h2>
            <p>{posts.excerpt.rendered.slice(3,100)}...</p>
        </div>
    )
}
export default Post;