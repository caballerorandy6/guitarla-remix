import { useState } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

//Get Guitar by URL
export async function loader({ params }) {
  const { guitarURL } = params;
  const guitar = await getGuitar(guitarURL); //console.log(guitar.data[0].attributes.name);

  //Launching the error
  if (guitar.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: `${" "}Guitarra no encontrada`,
    });
  }

  return guitar;
}

//Dynamic Meta Info
export function meta({ data }) {
  // Checking if data is undefined to throw the error
  if (!data) {
    return {
      title: "GuitarLA - Guitarra no encontrada",
      description: `Guitarras, venta de guitarras, guitarra no encontrada`,
    };
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`,
  };
}
function Guitar() {
  const { addCar } = useOutletContext();

  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      alert("Debe selecionar una cantidad");
      return;
    }
    //Selecting Data for Local Storage
    const selectedGuitar = {
      //console.log(selectedGuitar);
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity,
    };

    addCar(selectedGuitar);
  };

  return (
    <>
      <button className="boton" onClick={() => navigate("/guitars")}>
        Atras
      </button>
      <div className="guitarra">
        <img
          className="imagen"
          src={image.data.attributes.url}
          alt={`Imagen de la guitarra ${name}`}
        />

        <div className="contenido">
          <h3>{name}</h3>
          <p className="texto">{description}</p>
          <p className="precio">{price}</p>

          <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="cantidad">Cantidad</label>

            <select
              onChange={(e) => setQuantity(+e.target.value)}
              id="cantidad"
            >
              <option value="0">-- Seleccione -- </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Guitar;
