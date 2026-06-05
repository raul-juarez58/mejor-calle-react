import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Pagina2 from "./paginas/Pagina2";
import Pagina3 from "./paginas/Pagina3";
import "./App.css";


function App() {

  return (

      <div className="app"> 

    <BrowserRouter>
    <Navbar/>

        <div className="main-content">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagina2" element={<Pagina2 />} />
      <Route path="/pagina3" element={<Pagina3 />} />  
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
      </div>

    <Footer />

    </BrowserRouter>
        </div>
  );  
}

export default App;
