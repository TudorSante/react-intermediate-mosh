import { useReducer, useState } from "react";
import counterReducer from "./reducers/counterReducer";

const Counter = () => {
  // const [value, setValue] = useState(0);
  /* we use the reducer hook from react. 1st arg = our reducer fcn, 2nd arg =
  the initial state of the state. */
  const [value, dispatch] = useReducer(counterReducer, 0);

  /* by using a reducer we make sure that our component is only responsible
  for returning markup, it does not have any state management logic. Thus,
  we have better separation of concerns and potentially, we can reuse our
  reducer in other components that work with our counter. */
  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
