import React from "react";
import "./style.css";
import { Imagen } from "../Imagen";
import { Informacion } from "../Informacion";
import { Footer } from "../Footer";

function Card() {
  const estilo = {
    padding: "25px",
  };
  return (
    <React.Fragment>
      <div className="card" style={estilo}>
        <Imagen />
        <Informacion />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export { Card };
