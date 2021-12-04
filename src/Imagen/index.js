import React from "react";
import icon from "../assets/icon-view.svg";
import "./style.css";

function Imagen() {
  const [estilo, setEstilo] = React.useState({});
  const [imagen, setImagen] = React.useState(true);
  const [ojo, setOjo] = React.useState({ opacity: 0 });

  const cambio = () => {
    setImagen(!imagen);
    if (imagen) {
      setEstilo({
        opacity: 1,
      });
      setOjo({
        margin: "auto",
        width: "0px",
      });
      return 0;
    }
    setOjo({
      margin: "auto",
    });
  };

  return (
    <React.Fragment>
      <div
        className="contenedor"
        onMouseEnter={cambio}
        onMouseOut={cambio}
        style={estilo}
      >
        <div className="fondo"></div>
        <img src={icon} style={ojo} alt="Imagen" />
      </div>
    </React.Fragment>
  );
}

export { Imagen };
