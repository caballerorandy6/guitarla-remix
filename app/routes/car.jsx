import { useState, useEffect } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import styles from "~/styles/car.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return {
    title: "GuitarLA - Carrito de Compras",
    description: "Venta de guitarras, musica, blog, carrito de compras, tienda",
  };
}

function Car() {
  const [total, setTotal] = useState(0);
  const { car, updateQuantity, deleteGuitar } = useOutletContext();
  //console.log(car);

  useEffect(() => {
    const totalCalculate = car.reduce(
      (total, guitar) => total + guitar.quantity * guitar.price,
      0
    );
    setTotal(totalCalculate);
  }, [car]);

  return (
    <ClientOnly fallback={"loading..."}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>

          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>

              {car?.length === 0
                ? "Empty Car"
                : car?.map((guitar) => (
                    <div key={guitar.id} className="producto">
                      <div>
                        <img
                          src={guitar.image}
                          alt={`Imagen del producto ${guitar.name}`}
                        />
                      </div>
                      <div>
                        <p className="nombre">{guitar.name}</p>
                        <p>Cantidad: </p>

                        <select
                          value={guitar.quantity}
                          className="select"
                          onChange={(e) =>
                            updateQuantity({
                              quantity: +e.target.value,
                              id: guitar.id,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                        <p className="precio">
                          $ <span>{guitar.price}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal: ${" "}
                          <span>{guitar.quantity * guitar.price}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => deleteGuitar(guitar.id)}
                        type="button"
                        className="btn_eliminar"
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>

            <aside className="resumen">
              <h3>Resumen del pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}

export default Car;
