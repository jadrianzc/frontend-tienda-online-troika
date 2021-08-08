import React from "react";
import "./Inicio.css";
import NavCatregorias from "../Categorias/NavCategorias";
import Banner from "./Banner";
import MasVendidos from "./MasVendidos";

function Inicio() {
  return (
    <div className="ContInicio">
      <NavCatregorias />
      <div className="ContProducts">
        <Banner />
        <MasVendidos />
      </div>
    </div>
  );
}

export default Inicio;
