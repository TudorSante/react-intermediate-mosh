import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user.name)
    return (
      <>
        <div>
          <span className="mx-2">{user.name}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("mosh.hamedani")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
