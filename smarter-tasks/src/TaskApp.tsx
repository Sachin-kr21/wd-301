import React  from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";


interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

React.useState<TaskAppState>;
// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//   constructor(props: TaskAppProp) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }

//   addTask = (task: TaskItem) => {
//     this.setState((state, props) => {
//       return {
//         tasks: [...state.tasks, task],
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="container py-10 max-w-4xl mx-auto">
//         <h1 className="text-3xl mb-2 font-bold text-slate-700">
//           Smarter Tasks
//         </h1>
//         <h1 className="text-md mb-6 text-slate-600">
//           <span className="font-bold">Project: </span>
//           Graduation Final Year Project (Revamp college website)
//         </h1>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="border border-slate-200 rounded-xl p-4">
//             <h1 className="text-slate-500 font-bold text-center mb-2">
//               Pending
//             </h1>
//             <TaskForm addTask={this.addTask} />
//             <TaskList tasks={this.state.tasks} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const TaskApp = (props: TaskAppProp) => {
  // const [taskAppState, setTaskAppState] = React.useState<TaskAppState>({
  //   tasks: [],
  // });
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  // useEffect(() => {
  //   // document.title = `You have ${taskAppState.tasks.length} items`;
  //   const id = setTimeout(() => {
  //     console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
  //   }, 5000);
  //   return () => {
  //     console.log("clear or cancel any existing network call");
  //     clearTimeout(id);}
  // },[taskAppState.tasks]);

//   React.useEffect(() => {
// // This is correct usage
//   const saveTasks = async () => {
//     const token = await saveTasksToBackend(taskAppState.tasks);
//   }
//   saveTasks();
//   return () => {
//     cancelAPI(token);
//   };
// }, [taskAppState.tasks]);

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (task : TaskItem ) => {
    let len = taskAppState.tasks.length;
    let tasks = taskAppState.tasks;
    for(let i=0;i<len;i++){
      if(tasks[i].title===task.title && tasks[i].description===task.description && tasks[i].dueDate===task.dueDate){
        tasks.splice(i,1)
        setTaskAppState({"tasks":tasks})
        break
      }
    }
  }; 
  // const deleteTask = (task : TaskItem) => {
    
  // }

  return (
    <div>
      <TaskForm addTask={addTask} tasks={taskAppState.tasks}/>
      <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask}  />
    </div>
  );
};

export default TaskApp;