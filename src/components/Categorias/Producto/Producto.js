import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useCounter } from "../../../hooks/useCounter";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Producto.css";

const Producto = () => {
  const { id } = useParams();
  const cookies = new Cookies();
  const idUserSession = cookies.get("id");
  // console.log(idUserSession);

  const [documentos, setDocumentos] = useState({});

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/productos/${id}`
        );
        setDocumentos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
    window.scrollTo(0, 0);
  }, [id]);

  const { counter, increment, decrement } = useCounter(0);

  // handleAddCar
  const handleAddCar = async (idUserSession) => {
    const productoAdd = {
      ...documentos,
      cantidad_producto: counter,
      idUserSession: idUserSession,
    };
    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`,
        productoAdd
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="container-producto">
      <Grid container className="grid-container-producto">
        <Grid item className="grid-img grid-item" xs={6}>
          <div className="container-imgs">
            <img src={documentos.imgurl} alt="Imagen-Producto" />
          </div>
          <p>Imagen referencial</p>
        </Grid>
        <Grid item className="grid-content grid-item" xs={6}>
          <Grid container className="grid-container-det">
            <Grid item xs={12} className="grid-item-descrip">
              <h1>{documentos.descrip_producto}</h1>
            </Grid>
            <Grid item xs={12} className="grid-item-precio">
              $ {documentos.precio_producto}
            </Grid>
            <Grid item xs={12} className="grid-item-btn">
              <div className="container-btn">
                <p>Cantidad:</p>
                <div className="btn-cantidad">
                  <button onClick={() => decrement(2)}>-</button>
                  <button>{counter}</button>
                  <button onClick={() => increment(2)}>+</button>
                </div>
                <button
                  className="btn-addCarrito"
                  onClick={() => handleAddCar(idUserSession)}
                >
                  Añadir al carrito
                </button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <h4>Descripción:</h4>
              <p>{documentos.descrip_producto}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Producto;
