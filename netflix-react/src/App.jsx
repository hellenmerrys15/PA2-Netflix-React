import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Novedades from "./components/Novedades";
import Estrenos from "./components/Estrenos";
import MiLista from "./components/miLista";
import Contacto from "./components/Contacto";

import "./styles/estilos.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/estrenos" element={<Estrenos />} />
        <Route path="/milista" element={<MiLista />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;