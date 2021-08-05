import React from "react";
import { Grid } from "@material-ui/core";
import ProductosMasVendidos from "./ProductosMasVendidos";

function MasVendidos() {
  return (
    <div>
      <p className="LetraMasVendidos">Más vendidos</p>
      <Grid container spacing={3} className="GripContainer">
        <ProductosMasVendidos />
      </Grid>
    </div>
  );
}

export default MasVendidos;
