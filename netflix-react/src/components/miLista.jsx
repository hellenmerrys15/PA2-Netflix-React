import { useState, useEffect } from "react";
import { obtenerCatalogo } from "../services/netflixService";

function MiLista() {

  const [catalogo, setCatalogo] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {

    setCatalogo(obtenerCatalogo());

    const guardados =
      JSON.parse(
        localStorage.getItem("miListaNetflix")
      ) || [];

    setFavoritos(guardados);

  }, []);

  const agregar = (titulo) => {

    if (!favoritos.includes(titulo)) {

      const nuevaLista = [
        ...favoritos,
        titulo
      ];

      setFavoritos(nuevaLista);

      localStorage.setItem(
        "miListaNetflix",
        JSON.stringify(nuevaLista)
      );
    }
  };

  const eliminar = (titulo) => {

    const nuevaLista =
      favoritos.filter(
        item => item !== titulo
      );

    setFavoritos(nuevaLista);

    localStorage.setItem(
      "miListaNetflix",
      JSON.stringify(nuevaLista)
    );
  };

  return (

    <main className="main">

      <section className="mi-lista">

        <h1>
          MI LISTA NETFLIX
        </h1>

        <p>
          Agrega tus series, películas y animes favoritos.
        </p>

        <div id="catalogo">

          {catalogo.map(item => (

            <div
              key={item}
              className="card-lista"
            >

              <h3>
                {item}
              </h3>

              <button
                className="btn-lista"
                onClick={() => agregar(item)}
              >
                Agregar a Mi Lista
              </button>

            </div>

          ))}

        </div>

        <h2
          style={{
            marginTop: "40px"
          }}
        >
          Mis Favoritos
        </h2>

        <ul id="lista">

          {favoritos.map(item => (

            <li key={item}>

              {item}

              <button
                onClick={() => eliminar(item)}
              >
                Eliminar
              </button>

            </li>

          ))}

        </ul>

      </section>

      <section className="section-3">

        <footer className="footer">

          <a href="#">
            Preguntas frecuentes
          </a>

          <a href="#">
            Privacidad
          </a>

          <a href="#">
            Términos
          </a>

          <a href="#">
            Contáctanos
          </a>

          <p className="autor">
            © 2026 Hellen Merry Solis Cuba
          </p>

        </footer>

      </section>

    </main>

  );
}

export default MiLista;