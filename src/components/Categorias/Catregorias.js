//Contenido de productosa por categoria
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import NavCatregorias from "./NavCategorias";
import { useParams } from "react-router-dom";

import CardProducts from "./CardProducts";

function Categorias() {
  const { id } = useParams();

  return (
    <div className="ContInicio">
      <NavCatregorias />
      <div className="ContProducts">
        <Grid container spacing={3} className="GripContainer">
          <CardProducts id={id} />
        </Grid>
      </div>
    </div>
  );
}

export default Categorias;
