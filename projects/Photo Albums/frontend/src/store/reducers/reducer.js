export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ALBUMS':
      return { ...state, albums: payload };
    case 'SET_SELECTED_ALBUM':
      return { ...state, selectedAlbum: payload };
    case 'SET_FAVORITES':
      return { ...state, favorites: payload };
    case 'SET_FAVORITE_ALBUM':
      return { ...state, favoriteAlbum: payload };
    default:
      return state;
  }
};
