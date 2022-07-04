import { createContext, useReducer, useMemo } from 'react';

import reducer from './reducers';

const initialState = {
  albums: [],
  selectedAlbum: null,
  favorites: {},
  favoriteAlbum: []
};

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
  const [state, dispatch] = useReducer(
    reducer.reducer,
    undefined,
    reducer.init(initialState)
  );

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AlbumContext.Provider value={contextValue}>
      {props.children}
    </AlbumContext.Provider>
  );
};
