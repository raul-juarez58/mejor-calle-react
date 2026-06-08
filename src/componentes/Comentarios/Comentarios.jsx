import { useState } from "react";
import "./Comentarios.css";
import { supabase } from "../../supabase/client";

function Comentarios() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const cargarComentarios = async () => {

  const { data, error } = await supabase
    .from("comentarios")
    .select("*");

  if (!error) {
    setComentarios(data);
  }
};

  const enviarComentario = async () => {
    const { data, error } = await supabase
    .from("comentarios")
    .insert([
      {
        texto: comentario
      }
    ]);

    console.log("DATA:", data);
    console.log("ERROR:", error);

    setComentario("");
   cargarComentarios(); 
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