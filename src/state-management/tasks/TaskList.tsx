import { useContext } from "react";
import TasksContext from "./tasksContext";
import useAuthStore from "../auth/store";

export const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuthStore();

  return (
    <>
      <p>User: {user.name}</p>
      <button
        onClick={() =>
          dispatch({
            type: "Add",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "Delete", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
