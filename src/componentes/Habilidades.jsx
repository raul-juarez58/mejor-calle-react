import "./Habilidades.css";

function Habilidades() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Vercel"];
    
  return (
    <section className="habilidades">
      <h3>🛠️ Tecnologías utilizadas</h3>

      <p className="skills-descripcion">
    Este sitio fue desarrollado utilizando las siguientes tecnologías:
  </p>
    
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