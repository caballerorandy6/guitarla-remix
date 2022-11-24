import { Link, useLocation } from "@remix-run/react";
import image from "../../public/img/carrito.png";

function MainNav() {
  //Highlight current page
  const location = useLocation();
  //console.log(location);

  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        to="/guitars"
        className={location.pathname === "/guitars" ? "active" : ""}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link to="/car">
        <img src={image} alt="carrito de compras" />
      </Link>
    </nav>
  );
}

export default MainNav;
