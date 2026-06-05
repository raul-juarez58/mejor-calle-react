import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto">

      <h1>📩 Contacto</h1>

      <p className="contacto-texto">
        Si deseas comunicarte conmigo, puedes completar el siguiente formulario.
      </p>

      <form className="contacto-form">

        <input
          type="text"
          placeholder="Tu nombre"
        />

        <input
          type="email"
          placeholder="Tu email"
        />

        <textarea
          placeholder="Escribe tu mensaje..."
        ></textarea>

        <button type="submit">
          🚀 Enviar mensaje
        </button>

      </form>

    </section>
  );
}

export default Contacto;