import { useAuth } from "./AuthProvider";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user.name)
    return (
      <>
        <div>
          <span className="mx-2">{user.name}</span>
          <a onClick={() => dispatch({ type: "Logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "Login", userName: "mosh.hamedani" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
