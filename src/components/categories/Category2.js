import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getAllPostsAction} from "../../actions/postActions";
import { postData } from "../../components/data/PostData";
import getAllPostsReducer from "../../reducers/postReducers";
import Post2 from "../post/Post2";
import './category.css';
import CategoryTopBar from "./CategoryTopBar";
import videoholder from '../../assets/videoholder.png';

function Category2(){
    const dispatch = useDispatch()

    const allPosts = useSelector(state=>state.allPosts)
    const {error, loading, listAllPosts} = allPosts

    const posts = postData

    useEffect(()=>{
            dispatch(getAllPostsAction())
    }, [dispatch]);

    return (
        <div className="category1">
            <CategoryTopBar text="Category2"/>
            <div className="post-category-grid2">
                <div className="video-holder">
                    <div className="video-holder-image">
                        <img src = {videoholder} alt="everynews-videos" />
                    </div>
                </div>
                <div className="post2-cards">
            {
                listAllPosts ? (
                        listAllPosts.slice(5,7).map((post)=>
                        //post.categories === "2" &&
                        
                        <Post2 posts={post} key={post.id}/>
                    
                        )
                  
                        
                ) : (
             
                    <h2>Content is still loading</h2>
                )
            }
                  </div>
            </div>
            
    </div>
    )
}
export default Category2;