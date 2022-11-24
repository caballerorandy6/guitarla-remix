import Posts from "./posts";

function PostList({ posts }) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Posts key={post?.id} post={post.attributes}></Posts>
        ))}
      </div>
    </>
  );
}

export default PostList;
