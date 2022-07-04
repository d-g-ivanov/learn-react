import normalReducer from "./githubIssuesReducer";

const {
  localStorageKey: key,
  githubIssuesReducer: reducer,
  initialState
} = normalReducer;

const init = () => {
  try {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue !== null) {
      return JSON.parse(localStorageValue);
    }
  } catch (err) {}

  return initialState;
};

const reducerLocalStorage = (state, action) => {
  const newState = reducer(state, action);

  try {
    localStorage.setItem(key, JSON.stringify(newState));
  } catch {}

  return newState;
};

export default { githubIssuesReducer: reducerLocalStorage, init };
