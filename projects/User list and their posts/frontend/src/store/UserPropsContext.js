import { createContext, useMemo } from "react";

export const UserPropsContext = createContext();

export const UserPropsProvider = (props) => {
  const contextValue = useMemo(() => {
    return { ...props.value };
  }, [props.value]);

  return (
    <UserPropsContext.Provider value={contextValue}>
      {props.children}
    </UserPropsContext.Provider>
  );
};
