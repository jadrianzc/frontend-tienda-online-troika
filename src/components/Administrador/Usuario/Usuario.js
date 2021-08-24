import React, { useState } from "react";
import { Container, Grid, Typography, Snackbar } from "@material-ui/core";
import TablaUsuarios from "./TablaUsuarios";
import "./Usuario.css";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

const Usuario = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [stado, setStado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let nomb_usuario = e.target.nomb_usuario;
    let apell_usuario = e.target.apell_usuario;
    let ced_usuario = e.target.ced_usuario;
    let email_usuario = e.target.email_usuario;
    let contraseña_usuario = e.target.contraseña_usuario;
    const datos = {
      [nomb_usuario.name]: nomb_usuario.value,
      [apell_usuario.name]: apell_usuario.value,
      [ced_usuario.name]: ced_usuario.value,
      [email_usuario.name]: email_usuario.value,
      [contraseña_usuario.name]: contraseña_usuario.value,
      rol_usuario: "admin",
    };

    try {
      await axios
        .get(
          "http://localhost:4000/api/v1/verificaUsuario/" + datos.email_usuario
        )
        .then((respp) => {
          if (respp.data.length === 1) {
            console.log("correo existe");
          } else {
            RegistrarUsuario(datos);
            e.target.reset();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const RegistrarUsuario = async (datos) => {
    try {
      await axios.post("http://localhost:4000/api/v1/usuarios", datos);
      setStado(!stado);
      setOpenAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Container className="container container-user">
      <Grid
        container
        justifyContent="space-between"
        className="grid-container-add-user"
      >
        <Grid item className="grid-item-user-4">
          <div className="grid-item-title">
            <Typography className="title-usuario title">
              Agregar usuario
            </Typography>
          </div>
          <Grid item className="grid-item-user-data">
            <form method="post" onSubmit={handleSubmit}>
              <Grid container className="grid-container-user-data">
                <Grid item className="grid-item-info">
                  <label>Nombres</label>
                  <input type="text" name="nomb_usuario" required />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Apellidos</label>
                  <input type="text" name="apell_usuario" required />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Cédula/RUC</label>
                  <input type="text" name="ced_usuario" required />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>E-mail*</label>
                  <input type="text" name="email_usuario" required />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Contraseña </label>
                  <input type="password" name="contraseña_usuario" required />
                </Grid>
              </Grid>
              <Grid
                container
                className="grid-container-user-btn"
                justifyContent="flex-end"
                alignItems="center"
              >
                <button type="submit">Agregar</button>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid item className="grid-item-user-6">
          <div className="grid-item-title">
            <Typography className="title-usuario title">
              Búsqueda de usuario
            </Typography>
          </div>
          <Grid item className="grid-item-user-buscar">
            <Grid item className="grid-item-user-tabla">
              <TablaUsuarios stado={stado} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose={handleCloseAlert} severity="success">
          El usuario se creó correctamente.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Usuario;
