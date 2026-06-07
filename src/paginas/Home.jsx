import Header from "../componentes/Header";
import Articulo from "../componentes/Articulo";
import Aside from "../componentes/Aside";
import Habilidades from "../componentes/Habilidades";
import Footer from "../componentes/Footer";
import ProbandoSupa from "../componentes/ProbandoSupa";

function Home() {
  return (
    <>
      <Header />

      <main className="main-contenido">
        <Articulo />
        <Aside />
      </main>

        <Habilidades />
        <ProbandoSupa />

    </>
  );
}

export default Home;