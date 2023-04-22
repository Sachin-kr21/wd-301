export interface TaskItem {
    title: string;
    dueDate: string;
    description: string;
    // key: number;
    deleteTask:(task:TaskItem)=>void;
  }