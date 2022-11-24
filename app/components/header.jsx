import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import MainNav from "./mainnav";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link className="logo" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
