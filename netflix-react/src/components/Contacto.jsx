import { useState } from "react";

function Contacto() {

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const [formulario, setFormulario] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    web: "",
    mensaje: ""
  });

  const [correosRegistrados, setCorreosRegistrados] = useState([]);
  const [websRegistradas, setWebsRegistradas] = useState([]);

  const handleChange = (e) => {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  };

  const enviarFormulario = (e) => {

    e.preventDefault();

    if (
      correosRegistrados.includes(
        formulario.email.toLowerCase()
      )
    ) {

      alert("Este correo ya fue registrado");
      return;
    }

    if (
      formulario.web &&
      websRegistradas.includes(
        formulario.web.toLowerCase()
      )
    ) {

      alert("Este sitio web ya fue registrado");
      return;
    }

    setCorreosRegistrados([
      ...correosRegistrados,
      formulario.email.toLowerCase()
    ]);

    if (formulario.web) {

      setWebsRegistradas([
        ...websRegistradas,
        formulario.web.toLowerCase()
      ]);

    }

    setMensajeEnviado(true);

    setFormulario({
      nombres: "",
      apellidos: "",
      email: "",
      web: "",
      mensaje: ""
    });

    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000);

  };

  return (
    <>
      <section className="contacto-banner">

        <div className="contacto-overlay">

          <div className="contacto-texto">

            <h1>CONTÁCTANOS</h1>

            <p className="subtitulo-contacto">
              Revisa nuestros horarios de atención y déjanos un mensaje.
            </p>

          </div>

        </div>

      </section>

      <section className="contacto-contenido">

        <div className="bloque-contacto">

          <div className="bloque-izq">

            <h2>Horarios</h2>

            <p style={{ marginBottom: "20px" }}>
              Atención de Lunes a Domingo
            </p>

            <table className="tabla-contacto">

              <thead>
                <tr>
                  <th>Día</th>
                  <th>Horario</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Lunes a Viernes</td>
                  <td>09:00 – 18:00</td>
                </tr>

                <tr>
                  <td>Sábado</td>
                  <td>10:00 – 16:00</td>
                </tr>

                <tr>
                  <td>Domingo</td>
                  <td>10:00 – 14:00</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="bloque-der">

            <h2>Escríbenos</h2>

            <p style={{ marginBottom: "25px" }}>
              * Datos requeridos
            </p>

            <form
              className="form-contacto"
              onSubmit={enviarFormulario}
            >

              <label>Nombres:</label>

              <input
                type="text"
                name="nombres"
                value={formulario.nombres}
                onChange={handleChange}
                placeholder="Ej. Hellen Merry"
                required
              />

              <label>Apellidos:</label>

              <input
                type="text"
                name="apellidos"
                value={formulario.apellidos}
                onChange={handleChange}
                placeholder="Ej. Solis Cuba"
                required
              />

              <label>Email:</label>

              <input
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder="name@something.com"
                required
              />

              <small>
                Formato correcto: name@something.com
              </small>

              <label>Sitio Web:</label>

              <input
                type="url"
                name="web"
                value={formulario.web}
                onChange={handleChange}
                placeholder="http://tusitio.com"
              />

              <small>
                Formato correcto: http://tusitio.com
              </small>

              <label>Mensaje:</label>

              <textarea
                name="mensaje"
                value={formulario.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>

              <button
                type="submit"
                className="btn-contacto"
              >
                Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </section>

      {mensajeEnviado && (

        <div className="toast-exito">
          ✅ Formulario enviado correctamente
        </div>

      )}

    </>
  );
}

export default Contacto;