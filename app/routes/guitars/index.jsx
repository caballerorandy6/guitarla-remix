import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarList from "~/components/guitar-list";

export function meta() {
  return {
    title: "GuitarLa - Tienda de Guitarras",
    descripcion: "GuitarLA - Nuestra coleccion de guitarras",
  };
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;

  //const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  //const result = await response.json();
  //console.log(result);
  //console.log(process.env.API_URL);
}

function Store() {
  const guitars = useLoaderData();

  return <GuitarList guitars={guitars} />;
}

export default Store;
