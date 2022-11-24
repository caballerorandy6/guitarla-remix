import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getCourse } from "~/models/course.server";
import { getPosts } from "~/models/posts.server";
import GuitarList from "../components/guitar-list";
import PostList from "../components/post-list";
import Course from "../components/course";
import stylesGuitars from "~/styles/guitars.css";
import stylesPosts from "~/styles/blog.css";
import stylesCurso from "~/styles/course.css";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitars,
    },

    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  //console.log(guitars);
  //console.log(course);
  //console.log(posts);

  return { guitars: guitars.data, posts: posts.data, course: course.data };
}

function Index() {
  const { guitars, posts, course } = useLoaderData();

  //console.log(guitars);
  //console.log(posts);

  return (
    <>
      <main className="contenedor">
        <GuitarList guitars={guitars} />
      </main>

      <Course course={course.attributes} />

      <section className="contenedor">
        <PostList posts={posts} />
      </section>
    </>
  );
}

export default Index;
