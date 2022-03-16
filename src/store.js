import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createPostCommentReducer, getAllPostsReducer, getSinglePostReducer} from "./reducers/postReducers";


const reducers = combineReducers({
    allPosts : getAllPostsReducer,
    singlePost : getSinglePostReducer,
    createComment : createPostCommentReducer,
});

const middleware = [thunk]

const initialState = {
    //allPosts : {}
}

const store = createStore(reducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;