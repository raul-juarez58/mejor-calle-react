import "./Aside.css";

function Aside() {    
  return (
    <aside className="secundario">
      <h2>Autoridades a la escucha</h2>
      <p>Si alguien se pone las pilas...pasan cosas, como..!</p>
      <figure >
        <img src="/imagenes/foto-1.jpeg" alt="Foto de noticia" />
        <figcaption>Comienza una nueva calle !</figcaption>
      </figure>

      <h2>Un día, llegan las máquinas !!!</h2>
      <p>Y ahora... Sí; comienza el cambio !</p>

    </aside>
  );
}

export default Aside;