import "./Habilidades.css";

function Habilidades() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
    
  return (
    <section className="habil">
      <h2>Creado con :</h2>
    
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