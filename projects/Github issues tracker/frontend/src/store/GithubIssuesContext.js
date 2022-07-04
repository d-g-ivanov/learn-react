import { createContext, useReducer, useMemo } from "react";
import reducer from "./reducers/githubIssuesReduceWithLS";

export const GithubIssuesContext = createContext();

export const GithubIssuesProvider = (props) => {
  const [state, dispatch] = useReducer(
    reducer.githubIssuesReducer,
    undefined,
    reducer.init
  );

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <GithubIssuesContext.Provider value={contextValue}>
      {props.children}
    </GithubIssuesContext.Provider>
  );
};
