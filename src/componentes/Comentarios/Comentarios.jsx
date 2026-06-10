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
    console.log(comentarios);
  }
};

  const enviarComentario = async () => {

    if (!comentario.trim()) return;

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

const eliminarComentario = async (id) => {

    console.log("Eliminar:", id);

      const { error } = await supabase  
    .from("comentarios")
    .delete()
    .eq("id", id);

    console.log(error);

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

      <div className="lista-comentarios">
  {comentarios.map((item) => (
    <div key={item.id} className="comentario-item">
      <p>{item.texto}</p>

      <button onClick={() => eliminarComentario(item.id)}>
  🗑️ Eliminar
</button>

      <small>
        {new Date(item.created_at).toLocaleString("es-AR")}
      </small>
      
    </div>
  ))}
</div>
    </section>
  );
}

export default Comentarios;