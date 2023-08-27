import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

/* Our comp is solely resp for markup and UI logic. In contrast, the hook
useAddTodo is mainly resp for cache data management. */
const TodoForm = () => {
  const onAddTodo = () => {
    if (ref.current) ref.current.value = "";
  };

  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(onAddTodo);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addTodo.isLoading} className="btn btn-primary">
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
