import { useRef } from "react";

function Inicio() {

  const filaRef = useRef(null);

  const moverIzquierda = () => {
    filaRef.current.scrollBy({
      left: -600,
      behavior: "smooth"
    });
  };

  const moverDerecha = () => {
    filaRef.current.scrollBy({
      left: 600,
      behavior: "smooth"
    });
  };

  return (
    <>
      <section
        id="inicio"
        className="section-2"
      >

        <div className="overlay">

          <div className="s2-texto">

            <h1>
              PELÍCULAS,<br />
              SERIES Y<br />
              ANIME<br />
              ILIMITADOS
            </h1>

            <p>
              Disfruta de los mejores estrenos
              y las historias más emocionantes
              en un solo lugar. Vive la
              experiencia de entretenimiento
              al estilo Netflix.
            </p>

            <div className="botones">

              <a
                href="#"
                className="btn1"
              >
                ▶ Reproducir
              </a>

              <a
                href="#"
                className="btn2"
              >
                Más información
              </a>

            </div>

          </div>

        </div>

      </section>

      <article className="article">

        <h2 className="titulo-categoria">
          Solo en Netflix
        </h2>

        <div className="contenedor-carrusel">

          <button
            className="flecha flecha-izquierda"
            onClick={moverIzquierda}
          >
            &#10094;
          </button>

          <div
            className="filas"
            ref={filaRef}
          >

            {[1,2,3,4,5,6,7,8,9,10].map(
              num => (
                <div
                  className="card-anime"
                  key={num}
                >
                  <img
                    src={`/img/img${num}.jpg`}
                    alt={`Anime ${num}`}
                  />
                </div>
              )
            )}

          </div>

          <button
            className="flecha flecha-derecha"
            onClick={moverDerecha}
          >
            &#10095;
          </button>

        </div>

      </article>
    </>
  );
}

export default Inicio;