import { useState } from "react";
import "./Comentarios.css";

function Comentarios() {
  const [comentario, setComentario] = useState("");

  const enviarComentario = () => {
    console.log(comentario);
  };

  return (
    <section className="comentarios">
      <h3>💬 Comentarios</h3>

      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribí tu comentario..."
      />

      <button onClick={enviarComentario}>
        📤 Enviar
      </button>
    </section>
  );
}

export default Comentarios;