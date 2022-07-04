import { reducer } from './reducer.js';

// constants
const localStorageKey = 'favorites';
const saveOn = 'SET_FAVORITE_ALBUM';

// init
const init = (initialState) => () => {
  try {
    const localStorageValue = localStorage.getItem(localStorageKey);

    if (localStorageValue !== null) {
      const lValue = JSON.parse(localStorageValue);
      return Object.assign({}, initialState, lValue);
    }
  } catch (err) {}

  return initialState;
};

const reducerLocalStorage = (state, action) => {
  const newState = reducer(state, action);

  if (action.type === saveOn) {
    try {
      localStorage.setItem(
        localStorageKey,
        JSON.stringify({ [localStorageKey]: newState[localStorageKey] })
      );
    } catch {}
  }

  return newState;
};

export default { reducer: reducerLocalStorage, init };
