import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL
} from '../constants/postConstants';


const getAllPostsReducer = (state = {}, action) => {
    switch(action.type){
        case GET_ALL_POSTS_REQUEST:
            return {
                loading : true
            }
        case GET_ALL_POSTS_SUCCESS:
            return {
                loading : false,
                listAllPosts : action.payload
            }
        case GET_ALL_POSTS_FAIL:
            return {
                loading : false,
                error : action.payload
            }
        default:
            return state
    }
}
export default getAllPostsReducer;