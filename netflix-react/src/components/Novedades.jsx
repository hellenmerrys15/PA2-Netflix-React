import { useRef } from "react";

function Novedades() {

  const seriesRef = useRef(null);
  const peliculasRef = useRef(null);

  const moverIzquierda = (ref) => {
    ref.current.scrollBy({
      left: -500,
      behavior: "smooth"
    });
  };

  const moverDerecha = (ref) => {
    ref.current.scrollBy({
      left: 500,
      behavior: "smooth"
    });
  };

  return (

    <section className="simulcast">

      <div className="simu-header">
        <h1>Top 10 en Perú Hoy</h1>
      </div>

      <h2 className="titulo-categoria">
        Las 10 series más populares
      </h2>

      <div className="contenedor-top">

        <button
          className="flecha-top izquierda"
          onClick={() =>
            moverIzquierda(seriesRef)
          }
        >
          &#10094;
        </button>

        <div
          className="simu-grid"
          ref={seriesRef}
        >

          {[1,2,3,4,5,6,7,8,9,10].map(
            num => (

              <article
                className="simu-item"
                key={num}
              >

                <span className="numero-top">
                  {num}
                </span>

                <img
                  src={`/img/top${num}_serie.jpg`}
                  alt={`Serie ${num}`}
                />

              </article>

            )
          )}

        </div>

        <button
          className="flecha-top derecha"
          onClick={() =>
            moverDerecha(seriesRef)
          }
        >
          &#10095;
        </button>

      </div>

      <h2 className="titulo-categoria">
        Las 10 películas más populares
      </h2>

      <div className="contenedor-top">

        <button
          className="flecha-top izquierda"
          onClick={() =>
            moverIzquierda(peliculasRef)
          }
        >
          &#10094;
        </button>

        <div
          className="simu-grid"
          ref={peliculasRef}
        >

          {[1,2,3,4,5,6,7,8,9,10].map(
            num => (

              <article
                className="simu-item"
                key={num}
              >

                <span className="numero-top">
                  {num}
                </span>

                <img
                  src={`/img/top${num}_pelicula.jpg`}
                  alt={`Película ${num}`}
                />

              </article>

            )
          )}

        </div>

        <button
          className="flecha-top derecha"
          onClick={() =>
            moverDerecha(peliculasRef)
          }
        >
          &#10095;
        </button>

      </div>

    </section>

  );
}

export default Novedades;