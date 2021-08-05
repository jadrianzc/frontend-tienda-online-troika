import React from "react";
import { Grid } from "@material-ui/core";
import Catregorias from "../Categorias";
import "../../Inicio/Inicio.css";
import ProductosFiltros from "./ProductosFiltros";

function Filtros() {
  return (
    <div className="ContInicio">
      <Catregorias />
      <div className="ContProducts">
        <Grid container spacing={3} className="GripContainer">
          <ProductosFiltros />
        </Grid>
      </div>
    </div>
  );
}

export default Filtros;
