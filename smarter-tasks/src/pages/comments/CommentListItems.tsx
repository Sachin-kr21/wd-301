// src/pages/comments/CommentListItems.tsx
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


// First, I'll import the useCommentsState custom hook to access comments state.
import { useCommentsDispatch, useCommentsState } from "../../context/comment/context";
import { fetchComments } from "../../context/comment/actions";
export default function CommentListItems() {

  // I'll define a new constant called `state`, to call the useCommentsState() hook, 
  // and get access to comments state.
  let state: any = useCommentsState();
  let dispatch :any = useCommentsDispatch();
  let {projectID,taskID} = useParams();


  useEffect(() => {
    fetchComments(dispatch,{projectID,taskID});
  }, []);

  const { comments, isLoading, isError, errorMessage } = state
  let userId = comments.owner;

  // Next, I'll destructure the state object to gain access to comments, 
  // isLoading, isError and errorMessage property.

  // If `isLoading` is true, and there are no comments, in that case, 
  // I'll show a loading text
  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
// Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the comments object to show the 
  // individual comments card.
  


  const dateFunction  = (args : any) => {
    const isoDateString = args.toString();
    const date = new Date(isoDateString);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  }
  return (
    <>
      {comments.map((comment: any) => (
        <div className="comment">

            <p>{comment.User.name}</p>
            <p>{dateFunction(comment.updatedAt)}</p>
            <p>{comment.description}</p>
        </div>
      ))}
    </>
  );
}