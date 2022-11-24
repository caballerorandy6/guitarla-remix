import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

function Posts({ post }) {
  //onsole.log(post);

  const { content, image, title, url, publishedAt } = post;

  return (
    <article className="post">
      <img
        className="image"
        src={image.data.attributes.formats.small.url}
        alt={`imagen blog ${title}`}
      />
      <div className="contenido">
        <h3>{title}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{content}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Posts;
