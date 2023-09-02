interface Action {
  type: "INCREMENT" | "RESET"; // union of literal values
}

/* a reducer centralisez the state management of a component. The first
param = current state, 2nd param = action, obj describing what the user
is trying to do. Reducer takes in the current state and an action and 
returns the new state. */
const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state;
};

export default counterReducer;
