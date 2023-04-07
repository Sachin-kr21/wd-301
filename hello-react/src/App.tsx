// import TaskCard from "./TaskCard";

// function App() {
//   return (
    
//     <div class="grid grid-cols-6">
//     <div class="col-start-2 col-span-4">
//     <h1>Smarter Tasks</h1>
//      <div class="grid grid-cols-2 divide-x">
//       <div className="pending">
//         <h1>Pending</h1>
//         < TaskCard title="Studying" dueDate="01 Jan" assigneeName="Sachin"/>
//         < TaskCard title="Boxing" dueDate="02 Jan" assigneeName="Ruby"/>
//         < TaskCard title="Flexing" dueDate="03 Jan" assigneeName="Rohit"/>
//       </div>
//       <div className="done">
//         <h1>Done</h1>
//           < TaskCard title="Playing" completedAtDate="04 Jan" assigneeName="Shivani"/>
//           < TaskCard title="Listening" completedAtDate="05 Jan" assigneeName="Shareen"/>
//           < TaskCard title="Singing" completedAtDate="06 Jan" assigneeName="Shamshadh"/>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default App;
import * as React from 'react';
import TaskCard from "./TaskCard";

function App(): JSX.Element {
return (
<div className="grid grid-cols-6">
<div className="col-start-2 col-span-4">
<h1>Smarter Tasks</h1>
<div className="grid grid-cols-2 divide-x">
<div className="pending">
<h1>Pending</h1>
<TaskCard title="Studying" dueDate="01 Jan" assigneeName="Sachin" />
<TaskCard title="Boxing" dueDate="02 Jan" assigneeName="Ruby" />
<TaskCard title="Flexing" dueDate="03 Jan" assigneeName="Rohit" />
</div>
<div className="done">
<h1>Done</h1>
<TaskCard
           title="Playing"
           completedAtDate="04 Jan"
           assigneeName="Shivani"
         />
<TaskCard
           title="Listening"
           completedAtDate="05 Jan"
           assigneeName="Shareen"
         />
<TaskCard
           title="Singing"
           completedAtDate="06 Jan"
           assigneeName="Shamshadh"
         />
</div>
</div>
</div>
</div>
);
}

export default App;