// hooks
import { useContext } from 'react';

// context
import { AlbumContext } from '../store';

// components
import AlbumEntry from './AlbumEntry';

// the component
const AlbumEntries = () => {
  const { state, dispatch } = useContext(AlbumContext);

  const { selectedAlbum: album, favorites } = state;

  const { records, name } = album;

  // back button
  const onBackToAlbums = () => {
    dispatch({ type: 'SET_SELECTED_ALBUM', payload: null });
  };

  // mark as favorite
  const onMakeFavorite = (id) => {
    const newFavorites = { ...favorites };
    if (newFavorites[id]) delete newFavorites[id];
    else newFavorites[id] = true;

    dispatch({ type: 'SET_FAVORITES', payload: newFavorites });
  };

  return (
    <>
      <header>
        <button onClick={onBackToAlbums}>Back to Albums</button>
        <div>Viewing Album {name}</div>
      </header>
      <div className="album-list">
        {records.map((entry) => (
          <AlbumEntry
            entry={entry}
            key={entry.id}
            isFavorite={favorites[entry.id]}
            onMakeFavorite={() => onMakeFavorite(entry.id)}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumEntries;
