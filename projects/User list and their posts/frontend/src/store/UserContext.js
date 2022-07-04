import { createContext, useReducer, useMemo } from "react";
import { userReducer, userInitialState } from "./reducers/userReducer";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
