// components
import Collapsible from "./Collapsible";
import UserCard from "./UserCard";
// others

export default function Name({ user }) {
  return (
    <Collapsible label={user.name} badge={user.image}>
      <UserCard user={user} />
    </Collapsible>
  );
}
