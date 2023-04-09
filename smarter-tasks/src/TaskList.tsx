import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
    tasks : TaskItem[];
}

// interface TaskItem {
//     title: string
// }

interface State {
    // tasks: TaskItem[];
}


class TaskList extends React.Component<Props, State> {
    // constructor(props: Props) {
    //   super(props);
    //   this.state = {
    //     tasks: [{ title: "Pay rent" }, { title: "Submit assignment" }],
    //   };
    // }
    // componentDidMount() {
    //     const tasks = [{title : "Pay rent"},{title: "Submit assignment"}];
    //     this.setState((state , props) => ({
    //         tasks,
    //     }));
    // }
    render() {
    
      return this.props.tasks.map((task , idx) => <div ><Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} /></div>) ;
      
    }
  }

  



export default TaskList;