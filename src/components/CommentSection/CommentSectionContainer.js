// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  // const [comment, setComment] = useState(0)

  return (
    <div>
      {props.comments.map((comment, index) => <Comment comment={comment} key={index}/>)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
