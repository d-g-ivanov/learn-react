// hooks
import { useContext } from 'react';

// context
import { AlbumContext } from '../store';

// components
import AlbumItem from './AlbumItem';
import ScrollToTop from './ScrollToTop';

// the component
const AlbumsList = ({ onClick }) => {
  const { state, dispatch } = useContext(AlbumContext);

  const { albums, favoriteAlbum } = state;

  // events
  const onAblumClick = (album) => {
    dispatch({ type: 'SET_SELECTED_ALBUM', payload: album });
  };

  return (
    <>
      {favoriteAlbum.records && favoriteAlbum.records.length ? (
        <div className="album-list favorites">
          <h3>Favorites</h3>
          <AlbumItem
            album={favoriteAlbum}
            key="Favorites"
            onClick={onAblumClick}
          />
        </div>
      ) : (
        ''
      )}
      <div className="album-list">
        <h3>Albums ({albums.length})</h3>
        {albums.map((album, i) => {
          return <AlbumItem album={album} key={i} onClick={onAblumClick} />;
        })}
      </div>
      <ScrollToTop />
    </>
  );
};

export default AlbumsList;
