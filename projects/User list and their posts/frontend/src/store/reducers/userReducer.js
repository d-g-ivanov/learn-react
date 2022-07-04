export const userInitialState = [];

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "USERS":
      return [...payload];
    case "POSTS":
      return state.map((user) => {
        if (user.id === payload.userId) {
          return { ...user, posts: payload.posts };
        } else return user;
      });
    case "UPDATE_ONE":
      return state.map((user) => {
        if (user.id === payload.userId) {
          // can re-work that similar to sanitize function in config.js file
          if (payload.field.startsWith("address.")) {
            const [, key] = payload.field.split(".");
            const address = { ...user.address, [key]: payload.value };
            return { ...user, address };
          }
          return { ...user, [payload.field]: payload.value };
        } else return user;
      });
    default:
      return state;
  }
};
