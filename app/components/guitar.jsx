import { Link } from "@remix-run/react";

function Guitar({ guitar }) {
  const { description, image, price, url, name } = guitar;

  return (
    <div className="guitarra">
      <div className="guitarra-producto">
        <img
          src={image.data.attributes.formats.medium.url}
          alt={`Guitar_Image ${name}`}
        />
        <Link className="enlace" to={`/guitars/${url}`}>
          Ver Producto
        </Link>
      </div>

      <div className="contenido">
        <h3>{name}</h3>
        <p className="descripcion">{description}</p>
        <p className="precio">{price}</p>
      </div>
    </div>
  );
}

export default Guitar;
