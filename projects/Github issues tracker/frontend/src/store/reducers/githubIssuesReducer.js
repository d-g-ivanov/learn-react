const localStorageKey = "userAndRepo";

const initialState = {
  user: "",
  repo: ""
};

const githubIssuesReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE":
      return { ...state, ...payload };
    case "CLEAR":
      return { ...initialState };
    default:
      return state;
  }
};

export default { localStorageKey, githubIssuesReducer, initialState };
