import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL,

    GET_SINGLE_POST_REQUEST,
    GET_SINGLE_POST_SUCCESS,
    GET_SINGLE_POST_FAIL
} from '../constants/postConstants';


export const getAllPostsReducer = (state = {}, action) => {
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

export const getSinglePostReducer = (state = {}, action) => {
    switch(action.type){
        case GET_SINGLE_POST_REQUEST:
            return {
                loading : true
            }
        case GET_SINGLE_POST_SUCCESS:
            return {
                loading : false,
                singlePost : action.payload
            }
        case GET_SINGLE_POST_FAIL:
            return {
                loading : false,
                error : action.payload
            }
        default:
            return state
    }
}