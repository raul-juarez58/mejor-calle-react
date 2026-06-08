import { useState,useEffect } from "react";
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

useEffect(() => {
  cargarComentarios();
}, []);



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

      <div className="lista-comentarios">
  {comentarios.map((item) => (
    <p key={item.id}>
      {item.texto}
    </p>
  ))}
</div>
    </section>
  );
}

export default Comentarios;