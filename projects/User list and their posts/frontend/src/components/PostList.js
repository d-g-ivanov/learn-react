// components
import Post from "./Post";

// others

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.length ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <div>User has no posts!</div>
      )}
    </div>
  );
}
