import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createPostCommentAction, getSinglePostAction } from "../../actions/postActions";
import { getSinglePostReducer } from "../../reducers/postReducers";
import './SinglePost.css';
import message from '../../assets/message.png';


function Comments(){
    const {id} = useParams()
    const dispatch = useDispatch()

    const post = useSelector(state=>state.singlePost)
    const {loading, singlePost, error} = post

    useEffect(()=>{
        dispatch(getSinglePostAction())
    }, [dispatch])

    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [commentDisplay, setCommentDisplay] = useState(false)

    function submitHandler(e){
        e.preventDefault();
        setCommentDisplay(true)
        console.log('comment added')
    }

    return(
        <div className="comments-container">
            <h1>Readers Comments</h1>
            <div className="comments-inner-box">
           
           {commentDisplay ? (
                    
            <div className="comments-list">
            <div className="comment-item">
                <p>{comment.slice(0,215)}...</p>
                <div className="comment-item-lower-div">
                    <div className="comment-item-author">
                            <h2>{name}</h2>
                            <p>1min ago</p>
                    </div>
                    <div className="comment-item-reply">
                        <img src={message} alt="" />
                        <p>Reply comment</p>
                    </div>
                </div>
            </div>
            <div className="comment-item"></div>
        </div>
           ) : <h2>No comments yet.</h2>}

            <div className="comments-form-div">
                <form className="comments-form" onSubmit={submitHandler}>
                <h1>Join the discussion</h1>
                    <div className="comments-form-item">
                        <input type="text" placeholder="Write Your comment" className="text-input"
                        value={comment} onChange = {e=>setComment(e.target.value)}/>
                    </div>
                    <div className="comments-author-detail">
                    <div className="comments-form-item">
                        <label>Your Name</label>
                        <input value={name} onChange = {e=>setName(e.target.value)}/>
                    </div>
                    <div className="comments-form-item">
                        <label>Email Address</label>
                        <input value={email} onChange = {e=>setEmail(e.target.value)}/>
                    </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}
export default Comments;