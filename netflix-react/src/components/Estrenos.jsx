function Estrenos() {

  const estrenos = [
    ["31/05 (Dom)", "8:00 am", "Stranger Things 5", "Serie", "1", "Disponible"],
    ["01/06 (Lun)", "9:30 am", "Wednesday Temporada 2", "Serie", "1", "Estreno"],
    ["03/06 (Mié)", "10:00 am", "One Piece Live Action 2", "Serie", "2", "Estreno"],
    ["04/06 (Jue)", "11:30 am", "Demon Slayer", "Anime", "7", "Estreno"],
    ["05/06 (Vie)", "10:30 am", "Extraction 3", "Película", "1", "Pronto"]
  ];

  const obtenerBadge = (estado) => {

    if (estado === "Disponible") {
      return "badge ok";
    }

    if (estado === "Estreno") {
      return "badge new";
    }

    return "badge soon";
  };

  return (
    <>
      <section
        id="estrenos"
        className="coming-hero"
      >

        <div className="hero-carousel">

          <figure>

            <img
              src="/img/banner1.jpg"
              alt="Banner estreno"
            />

            <div className="estrenos-texto">

              <h1>
                PRÓXIMOS ESTRENOS
              </h1>

              <p>
                Descubre las nuevas series y
                películas que llegarán
                próximamente.
              </p>

              <a
                href="#lista-estrenos"
                className="btn-banner"
              >
                Ver calendario
              </a>

            </div>

            <div className="estreno-info">
              Los Desenredos del Amor - Estreno global — Muy pronto
            </div>

          </figure>

        </div>

      </section>

      <section
        id="lista-estrenos"
        className="cal-wrap"
      >

        <h2>
          Calendario de estrenos
        </h2>

        <div className="cal-scroll">

          <table className="cal-table">

            <thead>

              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Título</th>
                <th>Formato</th>
                <th>Ep.</th>
                <th>Estado</th>
              </tr>

            </thead>

            <tbody>

              {estrenos.map((item, index) => (

                <tr key={index}>

                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>

                  <td>
                    <span
                      className={
                        obtenerBadge(item[5])
                      }
                    >
                      {item[5]}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>
    </>
  );
}

export default Estrenos;