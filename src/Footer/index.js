import React from "react";
import perfil from "../assets/image-avatar.png";
import "./style.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="contenedor-footer">
          <img src={perfil} alt="Foto de perfil" />
          <p>
            Creation of
            <span className="nombre"> Jules Wyvern</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Footer };
