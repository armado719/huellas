import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./paginas/inicio";
import Header from "./paginas/header";
import Footer from "./paginas/footer";
import "./App.css"; // Asegúrate de importar tu hoja de estilos

function App() {
  return (
    <div className="app-container">
      <Header />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;
