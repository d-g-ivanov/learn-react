// components
import Collapsible from "./Collapsible";
import PostList from "./PostList";
// others

export default function CollapsiblePostList({ posts }) {
  return (
    <Collapsible label="Posts">
      <PostList posts={posts} />
    </Collapsible>
  );
}
