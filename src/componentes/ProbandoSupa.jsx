import { useEffect } from "react";
import { supabase } from "../supabase/client";

function ProbandoSupa() {

  useEffect(() => {

    const probarConexion = async () => {
        console.log("Supabase:", supabase);

      const { data, error } = await supabase
        .from("comentarios")
        .select();

      console.log(data);
      console.log(error);

if (error) {
  console.log("ERROR COMPLETO:", error);
  console.log("MENSAJE:", error.message);
}

    };

    probarConexion();

  }, []);

  return <p>Probando Supabase...</p>;
}

export default ProbandoSupa;