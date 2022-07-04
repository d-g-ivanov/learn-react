// hooks
import { useState } from 'react';
// components

// the component
const AlbumEntry = ({ entry, isFavorite, onMakeFavorite }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { id, url, title, albumId } = entry;

  const toggleFullscreen = (e) => {
    if (e.target.tagName === 'BUTTON') return false;
    setIsFullscreen((curr) => !curr);
  };

  let className = 'entry';

  if (isFavorite) className += ' favorite';

  if (isFullscreen) className += ' fullscreen';

  return (
    <article key={id} className={className} onClick={toggleFullscreen}>
      <small className="album-id">From album {albumId}</small>
      <button onClick={() => onMakeFavorite(id)} className="favorite">
        &#10084;
      </button>
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </article>
  );
};

export default AlbumEntry;
