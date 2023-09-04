export interface User {
  name: string;
}

interface LoginAction {
  type: "Login";
  userName: string;
}

interface LogoutAction {
  type: "Logout";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: User, action: AuthAction): User => {
  switch (action.type) {
    case "Login":
      return { name: action.userName };
    case "Logout":
      return { name: "" };
  }
};

export default authReducer;
