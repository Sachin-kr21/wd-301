import { Dialog } from "@headlessui/react"
import { addComment } from '../../context/comment/action';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useCommentsDispatch } from "../../context/comment/context";
import { useParams } from "react-router-dom";

type Inputs = {
  commentBox : string
};
export default function NewComment () {
  let { projectID, taskID } = useParams();

  
  const dispatchComments = useCommentsDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

const onSubmit: SubmitHandler<Inputs> = async (data) => {
  const { commentBox } = data
    const response = await addComment(dispatchComments, { commentBox , projectID , taskID })
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <label htmlFor="comment" className="text-lg font-medium leading-6 text-gray-900 ">Add Comment</label><br />
        <input
          placeholder="Enter comment"
          id="commentBox"
          {...register("commentBox", { required: true })}
          className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          // value={comment}
          // onChange={handleCommentChange}
        /><br /><br />
        <button 
        type="submit" 
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "
        id="addCommentBtn"
        >Submit</button>
      </form>
    </div>
  );

  
};



// export default NewComment;