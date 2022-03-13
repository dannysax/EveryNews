import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL
} from '../constants/postConstants';
import axios from 'axios';

const getAllPostsAction = () => async (dispatch) => {
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
export default getAllPostsAction;

