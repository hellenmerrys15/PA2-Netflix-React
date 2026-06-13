import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="section-1">
      <header className="header">

        <div className="img">
          <img
            src="/img/img_netflix.jpg"
            alt="Logo Netflix"
          />
        </div>

        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/novedades">Novedades Populares</Link>
          <Link to="/estrenos">Próximos Estrenos</Link>
          <Link to="/milista">Mi Lista</Link>
          <Link to="/contacto">Contáctanos</Link>
        </nav>

      </header>
    </section>
  );
}

export default Navbar;