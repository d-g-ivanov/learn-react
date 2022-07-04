// hooks
import { useEffect, useContext } from 'react';

// context
import { AlbumContext } from '../store';

// components
import AlbumsList from './AlbumsList';
import AlbumEntries from './AlbumEntries';

// the component
const AlbumsContainer = (props) => {
  const { state, dispatch } = useContext(AlbumContext);

  const { albums, selectedAlbum, favorites } = state;

  // favorites
  useEffect(() => {
    const favIds = Object.keys(favorites);
    const records = [];
    let visuals = [];

    if (favIds.length) {
      albums.forEach((album) => {
        album.records.forEach((entry) => {
          if (favorites[entry.id]) records.push(entry);
        });
      });

      visuals = records.slice(0, 8).map((item) => item.thumbnailUrl);
    }

    dispatch({
      type: 'SET_FAVORITE_ALBUM',
      payload: { visuals, records, name: 'Favorites' }
    });
  }, [favorites, albums]);

  // get albums
  useEffect(() => {
    const call = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const albums = await res.json();

      const grouped = albums.reduce((final, album) => {
        const albumId = album.albumId;
        const position = albumId - 1;

        final[position] = final[position] || {
          records: [],
          name: albumId,
          visuals: []
        };

        final[position].records.push(album);

        return final;
      }, []);

      grouped.forEach((group) => {
        for (let i = 0; i < 9; i++) {
          group.visuals.push(group.records[i].thumbnailUrl);
        }
      });

      dispatch({ type: 'SET_ALBUMS', payload: grouped });
    };
    call();
  }, []);

  return selectedAlbum !== null ? <AlbumEntries /> : <AlbumsList />;
};

export default AlbumsContainer;
