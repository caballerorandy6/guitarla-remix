import { useLoaderData, useNavigate } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({ data }) {
  // Checking if data is undefined to throw the error
  if (!data) {
    return {
      title: "GuitarLA - Post no encontrado",
      description: `Guitarras, venta de guitarras, post no encontrado`,
    };
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.title}`,
    description: `Guitarras, venta de guitarras, post ${data.data[0].attributes.title}`,
  };
}

export async function loader({ params }) {
  const { postURL } = params; //console.log(params);
  const post = await getPost(postURL); //console.log(post.data);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: `${" "}Post no encontrado`,
    });
  }

  return post;
}
function PostURL() {
  const navigate = useNavigate();
  const post = useLoaderData(); //console.log(post);

  const { title, content, image, publishedAt } = post?.data[0]?.attributes;

  return (
    <>
      <button className="boton" onClick={() => navigate("/blog")}>
        Atras
      </button>
      <article className="post mt-3">
        <img
          className="image"
          src={image?.data?.attributes?.url}
          alt={`imagen blog ${title}`}
        />
        <div className="contenido">
          <h3>{title}</h3>
          <p className="fecha">{formatearFecha(publishedAt)}</p>
          <p className="texto">{content}</p>
        </div>
      </article>
    </>
  );
}

export default PostURL;
