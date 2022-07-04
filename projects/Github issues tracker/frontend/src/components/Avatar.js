import Unknown from "./Unknown";

const Avatar = ({ person }) => (
  <>
    {person.avatar_url ? (
      <img src={person.avatar_url} alt={`Avatar of ${person.login}`} />
    ) : (
      <Unknown />
    )}
  </>
);

export default Avatar;
