import React, { useState,useEffect } from "react";
import { supabase } from "../../supabase/client";
import "./Like.css";

function Like() {
  const [likes, setLikes] = useState(0);

  const cargarLikes = async () => {
    const { data,error } = await supabase
      .from("likes")
      .select("*")
      .eq("id", 1)
      .limit(1);

      console.log ("DATA", data);
      console.log ("ERROR", error);

      if (!error && data.length > 0) {
        setLikes(data[0].contador);
      }
  };

  useEffect(() => {
    cargarLikes();
  }, []);

  const handleLike = async () => {
     const nuevoValor = likes + 1;

     console.log("LIKES ACTUAL:", likes);
     console.log("NUEVO VALOR:", nuevoValor);

     const { data, error } = await supabase
         .from("likes")
         .update({ contador: nuevoValor })
         .eq("id", 1);
         
      console.log("UPDATE DATA:", data);     
      console.log ("UPDATE ERROR:", error);   

      setLikes(nuevoValor);

  };

  return (
    <button
      className="like-btn"
      onClick={handleLike}
    >
      ❤️ {likes}
    </button>
  );
}

export default Like;