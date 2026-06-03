import "./Proyectos.css";

const proyectos = [
  {
    titulo: "Así comienza lo nuevo",
    descripcion: "(Por fin vamos a avanzar !)",
    imagen: "/imagenes/foto-1.jpeg",
  },
  {
    titulo: "Y así, tenemos lo nuevo",
    descripcion: "(Es otra cosa..!)",
    imagen: "/imagenes/foto-12.jpeg",
  },
  {
    titulo: "Y se prende el fueguito !!!",
    descripcion: "(Sí, ahora festejamos !)",
    imagen: "/imagenes/foto-6.jpeg",
  },
];

function Proyectos() {
  return (
    <section className="proyectos">
      <h2>Proyectos para todos</h2>

      <div className="grid-proyectos">
        {proyectos.map((proyecto, index) => (
          <div className="card-proyecto" key={index}>
            <img src={proyecto.imagen} alt={proyecto.titulo} />

            <div className="info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;