// import './TaskCard.css'

// const TaskCard = (props) => {
//   console.log(props)

//     if (props.dueDate){
//         return (
//         <div className='TaskItem'>
//         <h2 className="text-xl font-bold">{props.title}</h2>
//         <p>Due on: {props.dueDate}</p>
//         <p>Assignee: {props.assigneeName}</p>
//       </div>
//         )
//     }
//     else{
//         return (
//             <div className='TaskItem'>
//             <h2 className="text-xl font-bold">{props.title}</h2>
//             <p>Completed on: {props.completedAtDate}</p>
//             <p>Assignee: {props.assigneeName}</p>
//           </div>
//             )
//     }
// }

// export default TaskCard

import './TaskCard.css';
import * as React from 'react';

interface Props {
title: string;
dueDate?: string;
assigneeName: string;
completedAtDate?: string;
}

const TaskCard = (props: Props): JSX.Element => {
console.log(props)

if (props.dueDate) {
return (
<div className='TaskItem'>
<h2 className="text-xl font-bold">{props.title}</h2>
<p>Due on: {props.dueDate}</p>
<p>Assignee: {props.assigneeName}</p>
</div>
)
} else {
return (
<div className='TaskItem'>
<h2 className="text-xl font-bold">{props.title}</h2>
<p>Completed on: {props.completedAtDate}</p>
<p>Assignee: {props.assigneeName}</p>
</div>
)
}
}

export default TaskCard