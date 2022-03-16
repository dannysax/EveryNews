import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../actions/postActions";
import { getSinglePostReducer } from "../../reducers/postReducers";
import './SinglePost.css';
import singlepost from '../../assets/singlepost.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import whatsapp from '../../assets/whatsapp.png';
import clock from '../../assets/clock.png';
import author from '../../assets/author.png';
import calendar from '../../assets/calendar.png';



function Header(){
    const {id} = useParams()
    const dispatch = useDispatch()

    const post = useSelector(state=>state.singlePost)
    const {loading, singlePost, error} = post

    useEffect(()=>{
        dispatch(getSinglePostAction(id))
    }, [dispatch])

    return(
        <div className="header-container">
            {
        singlePost ? (
            <div className="single-post-header">
            <div className="single-post-title">
                <h2>{singlePost.title.rendered.replace(/[<.>]/g, "")}</h2>
            </div>
            <div className="single-post-social-icons">
                    <p>Search this post:</p>
                    <div className = "social-icons">
                        <img src = {facebook} alt = "everynews-social-link" />
                        <img src = {twitter} alt = "everynews-social-link" />
                        <img src = {whatsapp} alt = "everynews-social-link" />
                        <img src = {linkedin} alt = "everynews-social-link" />
                    </div>
            </div>
            <div className="single-post-image">
                <img src={singlepost} alt = "everynews" />
                <span>Financial Writer</span>
            </div>  
            <div className = "post-details">
                <div className="post-details-item">
                    <img src={author} alt="everynews" />
                    <p>Author name</p>
                </div>
                <div className="post-details-item">
                <img src={calendar} alt="everynews" />
                    <p>{singlePost.date.slice(0,7)}{" "}Mar.</p>
                </div>
                <div className="post-details-item">
                <img src={clock} alt="everynews" />
                    <p>6mins Read</p>
                </div>
            </div>
    </div> ) : <h2>Page is still loading</h2>
}
    </div>
    )
}
export default Header;