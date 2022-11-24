import { useLoaderData } from "@remix-run/react";
import PostList from "~/components/post-list";
import { getPosts } from "~/models/posts.server";

export function meta() {
  return {
    title: "GuitarLA - Nuestro Blog",
    description: "GuitarLA, Blog de musica y venta de guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();
  console.log(posts);
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();

  return <PostList posts={posts} />;
}

export default Blog;
