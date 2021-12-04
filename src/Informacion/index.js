import React from "react";
import "./style.css";
import ethereum from "../assets/icon-ethereum.svg";
import clock from "../assets/icon-clock.svg";

function Informacion() {
  return (
    <React.Fragment>
      <div className="informacion">
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="adicional">
          <span className="precio">
            <img src={ethereum} alt="Logo de ethereum" />
            0.041 ETH
          </span>
          <span className="dias">
            <img src={clock} alt="Logo de tiempo" />3 days left
          </span>
        </div>
      </div>
      <div className="separador"></div>
    </React.Fragment>
  );
}

export { Informacion };
