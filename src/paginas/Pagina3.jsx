
import { Link } from "react-router-dom";
import "./Pagina3.css"; 
import Proyectos from "../componentes/Proyectos";
import Like from "../componentes/Like/Like";
import Comentarios from "../componentes/Comentarios/Comentarios";

function Pagina3() {
  return (
    <main className="contenido">
      <h1>Proyectos Cumplidos</h1>

      <Proyectos />
      
      <h2>Algunos videitos..!</h2>

    <div className="videos">  
      <video controls >
        <source src="/videos/video-01.mp4" />
      </video>

      <video controls >
        <source src="/videos/video-02.mp4" />
      </video>

      <video controls >
        <source src="/videos/video-03.mp4" />
      </video>
      
    </div>
    <Like />
    <Comentarios />
  </main>  
  );
}

export default Pagina3;
