import React from "react";
import { Link } from "react-router-dom";
import './Post.css';




function Post2({posts}){
    return (
        <div className="post-card2">
            <Link to={`/post/${posts.id}`}>
            <img src = "https://source.unsplash.com/random" alt="everydaynews" /></Link>
            <div className = "post2-items">
            <h2>{posts.title.rendered.slice(0,50)}...</h2>
            <p>{posts.excerpt.rendered.slice(3,100)}...</p>
            </div>
        </div>
    )
}
export default Post2;