import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  /* the query hook obj also has a prop called error resp for keeping track of
  the errors encountered during data fetching. When calling the query hook we
  should also specify the types of error that we might encounted when fetching
  data (that are indeed specific in this case to our axios lib). Thus we use
  Error - the main axios class for errors. Pay attention to the types of the
  data and error properties of our query hook. We need them in order to be 
  able to access their values using the TS types check feature. */
  const { data: todos, error } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

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
