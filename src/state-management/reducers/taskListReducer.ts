export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "Add";
  task: Task;
}

interface DeleteTask {
  type: "Delete";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskListReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "Add":
      return [action.task, ...tasks];
    case "Delete":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default taskListReducer;
