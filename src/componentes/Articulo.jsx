import "./Articulo.css";

function Articulo() {
  return (
    <article className="articulo">
      <h2>Al término de la Pandemia</h2>
      <p>Luego del flagelo pandémico, se solicitó al Municipio de Quilmes, el asfaltado de calle "165" en Bernal.</p>

      <figure >
      <img src="/imagenes/foto-8.jpeg" alt="Foto de noticia" />
      <figcaption>Así era la calle 165 hasta Junio de 2023</figcaption>
      </figure>
      <h2>Y por suerte..!</h2>
      <p>Cuando alguien escucha tus pedidos,se obtienen cosas</p>
    </article>
  );
}

export default Articulo;