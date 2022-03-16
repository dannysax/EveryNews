import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../actions/postActions";
import { getSinglePostReducer } from "../../reducers/postReducers";
import './SinglePost.css';




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
            <div className="post-body-container">
                    <p>{singlePost.content.rendered.slice(0,500)}</p>
                    <p>{singlePost.content.rendered.slice(0,500)}</p>
                    <p>{singlePost.content.rendered.slice(0,500)}</p>
    </div> ) : <h2>Page is still loading</h2>
}
    </div>
    )
}
export default Header;