import useTodos from "./hooks/useTodos";

const TodoList = () => {
  /* use a custom hook to implement the separation of concerns (the
    query logic should not be inside the component). Our component 
    sole responsibility should be purely the markup. It doesn't 
    know how the data should be fetched. */
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
