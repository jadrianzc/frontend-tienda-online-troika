//Contenido de productosa por categoria
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import NavCatregorias from "./NavCategorias";
import { useParams } from "react-router-dom";
import "./Categorias.css";
import FiltraProducts from "./FiltraProducts";
import CardProducts from "./CardProducts";

function Categorias() {
  const { id } = useParams();
  const [filtro, setFiltro] = useState({ marca: "", modelo: "" });
  const [marca, setMarca] = useState({});
  const handleChange = (e) => {
    setFiltro({
      ...filtro,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setMarca({ marca: "", modelo: "" });
    setFiltro({ marca: "", modelo: "" });
  }, [id]);
  const Filtrado = (e) => {
    e.preventDefault();
    setMarca(filtro);
  };
  const Limpiar = () => {
    setMarca({ marca: "", modelo: "" });
    setFiltro({ marca: "", modelo: "" });
  };

  return (
    <div className="ContInicio">
      <NavCatregorias />
      <div className="ContProducts">
        <Grid container className="GipFiltro">
          <FiltraProducts
            id={id}
            onChange={Filtrado}
            handleChange={handleChange}
            filtro={filtro}
            Limpiar={Limpiar}
          />
        </Grid>
        <Grid container spacing={3} className="GripContainer">
          <CardProducts id={id} filtro={marca} />
        </Grid>
      </div>
    </div>
  );
}

export default Categorias;
