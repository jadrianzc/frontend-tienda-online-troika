import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import userLogo from "../../assets/images/user_vector.png";
import categoryLogo from "../../assets/images/category_vector.png";
import productsLogo from "../../assets/images/products_vector.png";
import pedidosLogo from "../../assets/images/pedidos_vector.png";
import "./Administrador.css";

const Administrador = () => {
  return (
    <Container className="container container-user container-admin">
      <Grid container className="grid-container-user admin">
        <Grid item className="grid-item-admin grid-item-admin-title">
          <div className="grid-item-title">
            <Typography className="title">Opciones de administrador</Typography>
            <hr className="underline underline2" />
          </div>
        </Grid>
        <Grid item className="grid-item-admin grid-item-admin-logo">
          <Grid
            container
            className="grid-container-adminLogo"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Link to={`/`}>
              <Grid item>
                <div className="div-logo">
                  <img src={userLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Usuarios</h3>
                </div>
              </Grid>
            </Link>
            <Link to={`/`}>
              <Grid item>
                <div className="div-logo">
                  <img src={categoryLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Categorías</h3>
                </div>
              </Grid>
            </Link>
            <Link to={`/`}>
              <Grid item>
                <div className="div-logo">
                  <img src={productsLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Productos</h3>
                </div>
              </Grid>
            </Link>
            <Link to={`/`}>
              <Grid item>
                <div className="div-logo">
                  <img src={pedidosLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Pedidos</h3>
                </div>
              </Grid>
            </Link>
          </Grid>
        </Grid>
        <Grid item className="grid-item-admin grid-item-admin-b">
          <div className="grid-item-admin-btn">
            <button>Cerrar Sesión</button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Administrador;
