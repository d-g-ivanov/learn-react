// components
import UserCardForm from "./UserCardForm";
import UserCardAside from "./UserCardAside";
import CollapsiblePostList from "./CollapsiblePostList";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <UserCardAside user={user} />
      <UserCardForm user={user} />
      {user.posts && <CollapsiblePostList posts={user.posts} />}
    </div>
  );
}
