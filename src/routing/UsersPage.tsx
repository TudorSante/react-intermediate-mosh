import UserList from "./UserList";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {
  const { user } = useAuth();
  /* if the user not auth, redirect him to the login page. To 
  keep our comp pure, we cannot use the navigate hook, as it
  changes the url in the browser (can use it in an effect hook,
  but by using this approach the component will be rendered first
  and only then the user redirected... does not make much sense).
  So we need to use here a Navigate element. */
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
