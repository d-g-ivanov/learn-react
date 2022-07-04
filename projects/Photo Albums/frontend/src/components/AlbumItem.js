// hooks

// components

// the component
const AlbumItem = ({ album, onClick }) => {
  const { name, visuals } = album;
  return (
    <button onClick={(e) => onClick(album)} key={name} className="album">
      {visuals
        ? visuals.map((vis, i) => <img src={vis} key={i} alt="Placeholder" />)
        : ''}
      <span>
        <small>View</small>
        <span>Album {name}</span>
        <br />
        <small>{album.records.length} entries</small>
      </span>
    </button>
  );
};

export default AlbumItem;
