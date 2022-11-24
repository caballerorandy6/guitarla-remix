import MainNav from "./mainnav";

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <MainNav />

        <p className="copyright">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
