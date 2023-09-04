import "./App.css";
import { useReducer } from "react";
import taskListReducer from "./state-management/reducers/taskListReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
