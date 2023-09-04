import React, { ReactNode, useContext, useReducer } from "react";
import AuthContext from "./authContext";

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

export const useAuth = () => useContext(AuthContext);

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, {} as User);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
