import { ReactNode, useReducer } from "react";
import taskListReducer, { Task } from "./reducers/taskListReducer";
import TasksContext from "./contexts/tasksContext";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, tasksDispatch] = useReducer(taskListReducer, [] as Task[]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
