import "./Habilidades.css";

function Habilidades() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Vercel", "IA"];
    
  return (
    <section className="habilidades">
      <h3>🛠️ Tecnologías utilizadas</h3>


      <p className="skills-descripcion">
    Este sitio fue desarrollado utilizando las siguientes tecnologías:
  </p>
  🤖 Además de las tecnologías utilizadas, este proyecto contó con el apoyo de herramientas de inteligencia artificial
   como asistente de aprendizaje y desarrollo, permitiendo explorar soluciones, mejorar el diseño y adquirir 
   nuevas habilidades durante el proceso.

    <div className="skills-container">
      {skills.map((skill, index) => (
        <span key={index} className="skill">
          {skill}
        </span>

      ))}
    </div>
    </section>
  );
}

export default Habilidades;