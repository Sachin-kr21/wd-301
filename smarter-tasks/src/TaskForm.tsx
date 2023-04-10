import React from "react";
import { TaskItem } from "./types";
// import TaskList from "./TaskList";


interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}
class TaskForm extends React.Component<TaskFormProps,TaskFormState>{
    constructor(props : TaskFormProps){
        super(props);
        this.state = {
            title : "",
            dueDate: "",
            description: ""
            
        }
    }

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
          dueDate: this.state.dueDate,
          description: this.state.description
        }
        if (this.state.dueDate !== "" && this.state.title !== ""){
        try{
            this.props.addTask(newTask);
        }
        catch(error){
            console.log(error);
        }
    }
        this.setState({ title: "" });
        this.setState({ dueDate: "" });
        this.setState({ description: "" });
      };
    
    // inputRef = React.createRef<HTMLInputElement>();
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };

    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ dueDate: event.target.value });
    };

    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ description: event.target.value });
    };

    render(): React.ReactNode {
        return (
            // <div>Task form</div>
            <form onSubmit={this.addTask}>
                <input type="text" id="todoTitle" value={this.state.title} onChange={this.titleChanged} />
                <input type="text" id="todoDueDate" value={this.state.dueDate} onChange={this.dueDateChanged} />
                <input type="text" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged} />
                <button type="submit" id="addTaskButton">Add item</button>
            </form>
        )
    }
}

export default TaskForm;