import { useReducer } from "react";
import { AuthContext, authReducer } from "./index";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return {
    logged: !!user,
    user: user
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);
  const user = {id: "ABC", name: "Diego"}

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ state: state, login: login }}>
      {children}
    </AuthContext.Provider>
  );
};
