export interface TaskItem {
    title: string;
    dueDate: string;
    description: string;
    id : number;
    deleteTask:(task:TaskItem)=>void;
  }