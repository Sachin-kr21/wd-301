import React from 'react';
import "./TaskCard.css";
import { TaskItem } from './types';



interface TaskProp {
    title : string;
    dueDate : string;
    description : string;
}

// interface TaskIndex{
//   key : number;
// }

const Task = (props : TaskItem) => {
  const deleteTask  = () => {
    // delete dunctionality
  }
  return (
    
    <div className="TaskItem shadow-md border border-slate-100" >
      <li >
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.description}
      </p>
      <button className='deleteTaskButton' onClick={() => deleteTask()}>Delete</button>
      </li>
    </div>
  );
}


  export default Task;