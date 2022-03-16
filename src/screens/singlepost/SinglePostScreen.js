import React from "react";
import { Comments, Header, PostBody } from "../../components";


function SinglePostScreen(){
    return (
        <React.Fragment>
            <Header />
            <PostBody />
            <Comments />
        </React.Fragment>
    )
}
export default SinglePostScreen;