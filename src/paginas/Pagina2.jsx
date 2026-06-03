
    import "./Pagina2.css";
    import { Link } from "react-router-dom";

function Pagina2() {    
  return (
    <div className="pagina2">

      <header>
        <h1>"Llega Octubre de 2023 ..!"</h1>
      </header>

      <main className="galeria">

  <section className="bloque">

    <figure>
      <img className="foto-chica"
       src="/imagenes/foto-5.jpeg" alt="Foto 5" />
      <figcaption>Ultimos retoques</figcaption>
    </figure>

    <figure>
      <img src="/imagenes/foto-11.jpeg" alt="Foto 11" />
      <figcaption>Preparativos de re-inauguración</figcaption>
    </figure>

    <figure>
      <img src="/imagenes/foto-2.jpeg" alt="Foto 2" />
      <figcaption>La gente se acomoda</figcaption>
    </figure>

    <figure>
      <img src="/imagenes/foto-14.jpeg" alt="Foto 14" />
      <figcaption>Ultimos toques de la re-inauguración</figcaption>
    </figure>

  </section>

  <section className="bloque">

    <figure>
      <img src="/imagenes/foto-3.jpeg" alt="Foto 3" />
      <figcaption>Llegan las Autoridades</figcaption>
    </figure>

    <figure>
      <img src="/imagenes/foto-9.jpeg" alt="Foto 9" />
      <figcaption>Saludos protocolares</figcaption>
    </figure>

    <figure>
      <img src="/imagenes/foto-4.jpeg" alt="Foto 4" />
      <figcaption>Y no tan protocolares</figcaption>
    </figure>

    <figure>
      <img
      className="foto-grande"
      src="/imagenes/foto-10.jpeg"
       alt="Foto 10" 
       />
      <figcaption>Y se dá por re-inaugurada al tramo único de "165"
        (me atrevo a decir, que con este pedido se han beneficiado varias cuadras,
         que no habían sido tenidas en cuenta. Hasta ahora..! )
      </figcaption>
    </figure>

  </section>

</main>

    </div>
  );
}

export default Pagina2;