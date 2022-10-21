import React from "react";
import PostItem from './post-item'
import postsArray from './posts.json'
import "./index.css";


const PostList = () => {
    return (
           <ul class="list-group">
                {
                postsArray.map(post =>
                                   <PostItem
                                       key={post._id} post={post}/> )
            }
           </ul>
); }

export default PostList;