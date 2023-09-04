import React from "react";
import { Task, TaskAction } from "./TasksProvider";

/* this is the obj we are going to transport using React context. */
interface TasksContextType {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
