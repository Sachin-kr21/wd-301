// import React, { useState, useEffect } from 'react';
import React from 'react';
import CommentListItems from './CommentListItems';

const CommentList: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <CommentListItems />
    </div>
  );
};
export default CommentList;