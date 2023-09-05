import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore();

  /* by using a reducer we make sure that our component is only responsible
  for returning markup, it does not have any state management logic. Thus,
  we have better separation of concerns and potentially, we can reuse our
  reducer in other components that work with our counter. */
  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
