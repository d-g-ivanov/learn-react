const formInitialState = {
  fname: "",
  lname: "",
  email: ""
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE":
      return { ...state, ...payload };
    case "CLEAR":
      return { ...formInitialState };
    default:
      return state;
  }
};

export default { formReducer, formInitialState };
