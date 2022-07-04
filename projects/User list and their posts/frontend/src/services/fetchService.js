import { BASE_URL, USER_DATA } from "../config";
import sanitize from "../utils/sanitize";

export function get(path) {
  return fetch(BASE_URL + path).then((response) => {
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    return response.json();
  });
}

export function getUsers() {
  return get("/users").then((data) =>
    data.map((user) => sanitize(user, USER_DATA))
  );
}

export function getPosts(userId) {
  return get(`/posts?userId=${userId}`);
}

export function mockUpdate(waitFor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, waitFor || 3000);
  });
}
