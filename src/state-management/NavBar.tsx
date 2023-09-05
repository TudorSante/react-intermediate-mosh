import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks/TaskList";

const NavBar = () => {
  /* this comp is dependent only on this prop and will rerender
  only if counter changes, and not the rest of the store props.
  Note that here we have used a Selector. */
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
