import React from "react";
import "./Inicio.css";
import Categorias from "../Categorias/Categorias";
import Banner from "./Banner";
import MasVendidos from "./MasVendidos";

function Inicio() {
  return (
    <div className="ContInicio">
      <Categorias />
      <div className="ContProducts">
        <Banner />
        <MasVendidos />
      </div>
    </div>
  );
}

export default Inicio;
