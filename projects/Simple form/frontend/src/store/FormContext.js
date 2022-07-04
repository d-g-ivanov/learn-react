import { createContext, useReducer, useMemo } from "react";
import reducer from "./reducers/formReducer";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [state, dispatch] = useReducer(
    reducer.formReducer,
    reducer.formInitialState
  );

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};
