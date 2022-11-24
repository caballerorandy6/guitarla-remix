import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "./components/footer";

//Add Meta info
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLa - Remix",
    viewport: "width=device-width,initial-scale=1",
  };
}

//Add CSS
export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },

    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

//Principal Function //Context API
export default function App() {
  //Car Local Storage
  const carLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("car")) ?? []
      : null;

  const [car, setCar] = useState(carLS);

  //Local Storage
  useEffect(() => {
    localStorage.setItem("car", JSON.stringify(car));
  }, [car]);

  //Function to avoid duplicate entries in a shopping cart
  const addCar = (guitar) => {
    if (car.some((guitarState) => guitarState.id == guitar.id)) {
      //Iterating over the array and identifying the duplicate element
      const updatedCar = car.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          //rewrite the quantity
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });

      setCar(updatedCar); //Add to Car
    } else {
      setCar([...car, guitar]); //New Register, add to car
    }
  };

  //Function update quantity from car
  const updateQuantity = (guitar) => {
    const updatedCar = car.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity;
      }
      return guitarState;
    });
    setCar(updatedCar);
  };

  //Function Delete Guitar
  const deleteGuitar = (id) => {
    const updatedCar = car.filter((guitarState) => guitarState.id !== id);
    setCar(updatedCar);
  };

  return (
    <Document>
      <Outlet context={{ addCar, car, updateQuantity, deleteGuitar }} />
    </Document>
  );
}

//Layout or Document
function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/* Error Handle */
export function CatchBoundary() {
  const error = useCatch(); //console.log(error);
  return (
    <Document>
      <p className="error">
        {error.status}
        {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Tal ves quieras volver hacia la pagina principal
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status}
        {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Tal ves quieras volver hacia la pagina principal
      </Link>
    </Document>
  );
}
