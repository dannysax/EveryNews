import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import {getAllPostsAction} from "../../actions/postActions";
import { postData } from "../../components/data/PostData";
import getAllPostsReducer from "../../reducers/postReducers";
import Post from "../post/Post";
import './category.css'
import CategoryTopBar from "./CategoryTopBar";


function Category1(){
    const dispatch = useDispatch()

    const allPosts = useSelector(state=>state.allPosts)
    const {error, loading, listAllPosts} = allPosts

    const posts = postData

    useEffect(()=>{
            dispatch(getAllPostsAction())
    }, [dispatch]);

    return (
        <div className="category1">
            <CategoryTopBar text="Category1"/>
            <div className="post-category-grid1">
            {
                listAllPosts ? (
                        listAllPosts.slice(0,8).map((post)=>
                        //post.categories === "2" &&
                        <Post posts={post} key={post.id}/>
                        )
                        
                ) : (
             
                    <h2>Content is still loading</h2>
                )
            }
            </div>
            
    </div>
    )
}
export default Category1;