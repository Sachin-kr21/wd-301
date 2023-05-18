import React from "react"
import { TaskItem } from "./types";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TaskProp {
  title: string,
  description:string,
  dueDate:string
}

// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//         <p className="text-sm text-slate-500">{this.props.dueDate}</p>
//         <p className="text-sm text-slate-500">
//           Description: {this.props.description}
//         </p>
//       </div>
//     );
//   }

// }

const Task = (props: TaskItem) => {
  const deleteTask: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("clicked");
    props.deleteTask(props)
  };
  return (
    <li className="TaskItem shadow-md border border-slate-100">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      
      <button onClick={deleteTask} className="deleteTaskButton">
        delete
      </button>
    </li>
  );
};

export default Task;