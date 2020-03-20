//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      { data.map((post, index) => <Post post={post} key={`${post.timestamp}${index}`}/>)}
    </div>
  );
};

export default PostsPage;

