import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL,

    GET_SINGLE_POST_REQUEST,
    GET_SINGLE_POST_SUCCESS,
    GET_SINGLE_POST_FAIL,

    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL
} from '../constants/postConstants';
import axios from 'axios';

export const getAllPostsAction = () => async (dispatch) => {
    try{
        dispatch({
            type : GET_ALL_POSTS_REQUEST
        });

        const {data} = await axios.get("https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/")

        dispatch({
            type : GET_ALL_POSTS_SUCCESS,
            payload : data
        });

    }catch(error){
        dispatch({
            type : GET_ALL_POSTS_FAIL,
            payload : error.response && error.response.data
            ? error.response.data : error.message
        });
    }
}

export const getSinglePostAction = (id) => async (dispatch) => {
    try{
        dispatch({
            type : GET_SINGLE_POST_REQUEST
        });

        const {data} = await axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`)

        dispatch({
            type : GET_SINGLE_POST_SUCCESS,
            payload : data
        });

    }catch(error){
        dispatch({
            type : GET_SINGLE_POST_FAIL,
            payload : error.response && error.response.data
            ? error.response.data : error.message
        });
    }
}



export const createPostCommentAction = (id, comment) => async (dispatch) => {
    try{
        dispatch({
            type : CREATE_COMMENT_REQUEST
        });

        const {data} = await axios.post(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`,
        comment)

        dispatch({
            type : CREATE_COMMENT_SUCCESS,
            payload : data
        });

    }catch(error){
        dispatch({
            type : CREATE_COMMENT_FAIL,
            payload : error.response && error.response.data
            ? error.response.data : error.message
        });
    }
}



