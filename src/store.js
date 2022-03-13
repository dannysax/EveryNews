import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import getAllPostsReducer from "./reducers/postReducers";


const reducers = combineReducers({
    allPosts : getAllPostsReducer
});

const middleware = [thunk]

const initialState = {
    //allPosts : {}
}

const store = createStore(reducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;