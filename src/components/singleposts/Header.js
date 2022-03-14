import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePostAction } from "../../actions/postActions";
import { getSinglePostReducer } from "../../reducers/postReducers";



function Header(){
    const {id} = useParams()
    const dispatch = useDispatch()

    const post = useSelector(state=>state.singlePost)
    const {loading, singlePost, error} = post

    useEffect(()=>{
        dispatch(getSinglePostAction(id))
    }, dispatch)

    return(
        loading ? <h2>Page loading</h2> : error ? <h1>page error</h1> :
        <div className="single-post-header">
            <div className="single-post-title">
                <h2>loaded</h2>
            </div>
            <div className="single-post-image"></div>
            <div className="single-post-social-icons"></div>
        </div>
    
    )
}
export default Header;