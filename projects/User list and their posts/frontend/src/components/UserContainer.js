// hooks
import { useContext, useEffect } from "react";

// components
import CollapsibleUserCard from "./CollapsibleUserCard";
import { UserPropsProvider } from "../store/UserPropsContext";

// others
import { UserContext } from "../store/UserContext";
import {FORM_INPUTS} from '../config';

import {
  getUsers,
  getPosts,
  mockUpdate as sleep
} from "../services/fetchService";

export default function UserContainer() {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const get = async () => {
      const users = await getUsers();
      dispatch({ type: "USERS", payload: users });
    };

    get();
  }, []);

  // onChange
  const onChange = (userId, data) => {
    dispatch({
      type: "UPDATE_ONE",
      payload: { userId, ...data }
    });
  };
  // onUpdate
  const onUpdate = async (userId, callback) => {
    await sleep();
    const user = state.find((user) => user.id === userId);
    alert(JSON.stringify(user, null, 2));

    typeof callback === "function" && callback("success");
  };
  // onPosts
  const onPosts = async (userId, callback) => {
    let status = "";
    try {
      const posts = await getPosts(userId);
      dispatch({
        type: "UPDATE_ONE",
        payload: { userId, field: "posts", value: posts }
      });
      status = "success";
    } catch (error) {
      alert(
        "Something went wrong fetching the content. Might be that the API is not available."
      );
      status = "failed";
    } finally {
      typeof callback === "function" && callback(status);
    }
  };

  return (
    <div className="container">
      <UserPropsProvider value={{ onChange, onUpdate, onPosts, inputList: FORM_INPUTS }}>
        {state.map((user) => (
          <CollapsibleUserCard key={user.id} user={user} />
        ))}
      </UserPropsProvider>
    </div>
  );
}
