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
      .then((res) => res.data); // we don't need to return the whole query obj, just the data from its body

  /* define a React Query hook, where the config obj has 2 props: the queryKey
  which unique identifier used internally for caching. Any time we retrieve data
  from the backend, this data will be stored in the cached and accessible via
  this key. We set this key to an array of one or more values, the first value 
  is typically a string -> the type of values we want to store using this hook.
  2nd prop: queryFn = the fct used to fetch the data from the backend. This fcn
  should return a promise that resolves to data or throws an error.
  This replaces the use of state hooks and effect hooks that we used in the past
  and provides a more concise and easier to follow impl.

  Benefits of using this react query approach: Auto retries, auto fetching, 
  caching (the first time we fetch data, it is stored in the cache and will be
  fresh for a certain period of time => getting the data in the future from 
  the cache instead of the backend greatly improves the perf of our app).
    */
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // if (error) return <p>{error}</p>;

  // use optional chaining to treat also the case when todos is undefined/null
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
