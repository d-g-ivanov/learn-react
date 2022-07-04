// hooks

// components
import AlbumEntry from './AlbumEntry';

// the component
const AlbumEntries = ({ entries, favorites }) => {
  const ids = Object.keys(favorites);

  const items = entries.filter((item) => ids.indexOf(item.id) > -1);

  return (
    <AlbumEntry
      entry={entry}
      key={entry.id}
      isFavorite={favorites[entry.id]}
      onMakeFavorite={() => onMakeFavorite(entry.id)}
    />
  );
};

export default AlbumEntries;
