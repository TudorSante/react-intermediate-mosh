import React from "react";
import { AuthAction, User } from "../reducers/authReducer";

interface AuthContextType {
  user: User;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
