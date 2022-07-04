// hooks
import { useState, useContext } from "react";

// components
import Button from "./Button";

// others
import { UserPropsContext } from "../store/UserPropsContext";

export default function UserCardAside({ user }) {
  const [updateButtonStatus, setUpdateButtonStatus] = useState("");
  const [postButtonStatus, setPostButtonStatus] = useState("");

  const { onUpdate, onPosts } = useContext(UserPropsContext);

  const updateClick = () => {
    setUpdateButtonStatus("pending");
    onUpdate(user.id, (status) => setUpdateButtonStatus(status));
  };

  const postClick = () => {
    setPostButtonStatus("pending");
    onPosts(user.id, (status) => setPostButtonStatus(status));
  };

  return (
    <div className="user-image">
      <img src={user.image} alt={`Avatar of user.username`} />
      <Button status={updateButtonStatus} text="Update" onClick={updateClick} />
      <Button status={postButtonStatus} text="Show Posts" onClick={postClick} />
    </div>
  );
}
