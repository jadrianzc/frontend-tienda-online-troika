import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Container, Grid, Typography } from "@material-ui/core";
import "./PerfilUsuario.css";

const PerfilUsuario = () => {
  const cookies = new Cookies();
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    session();
  }, []);

  const session = () => {
    //verificar si hay alguna session
    if (cookies.get("id")) {
      const id = cookies.get("id");
      LoadData(id);
    } else {
      window.location.href = "/";
    }
  };
  const LoadData = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/usuarios/${id}`
      );
      setDocumentos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="container-user">
      <Grid container className="grid-container-user">
        <Grid item className="grid-item-perfil">
          <div className="grid-item-title">
            <Typography className="title">Perfil de la cuenta</Typography>
            <hr className="underline" />
          </div>
          <Grid container className="grid-item-col">
            <Grid item className="grid-item-img">
              <img src="" alt="Imagen-Usuario" />
            </Grid>
            <Grid item className="grid-item-data">
              <Grid container className="grid-container-data">
                <Grid item className="grid-item-info">
                  <label>Nombres*</label>
                  <input type="text" value={documentos.nomb_usuario}></input>
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Apellidos*</label>
                  <input type="text" value={documentos.apell_usuario}></input>
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Cédula/RUC*</label>
                  <input type="text" value={documentos.ced_usuario}></input>
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Teléfono</label>
                  <input type="text" value={documentos.telf_usuario}></input>
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Celular*</label>
                  <input type="text" value={documentos.cel_usuario}></input>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="grid-item-data">
              <Grid container className="grid-container-data2">
                <Grid item className="grid-item-info2">
                  <label>E-mail*</label>
                  <input type="text" value={documentos.email_usuario}></input>
                </Grid>
                <Grid item className="grid-item-info2">
                  <label>Sexo*</label>
                  <input type="text"></input>
                </Grid>
              </Grid>
              <Grid
                container
                className="grid-container-data"
                justifyContent="center"
                alignItems="center"
              >
                <button>Actualizar datos</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="grid-item-seguridad">
          <div className="grid-item-title">
            <Typography className="title">Seguridad</Typography>
            <hr className="underline" />
          </div>
          <Grid container className="grid-item-col">
            <Grid item className="grid-item-data grid-item-margin">
              <Grid container className="grid-container-data">
                <Grid item className="grid-item-info3">
                  <label>Contraseña actual</label>
                  <input
                    type="password"
                    placeholder="Contraseña actual"
                  ></input>
                </Grid>
                <Grid item className="grid-item-info3">
                  <label>Nueva contraseña</label>
                  <input type="password" placeholder="Nueva contraseña"></input>
                </Grid>
                <Grid item className="grid-item-info3">
                  <label>Repita la contraseña</label>
                  <input
                    type="password"
                    placeholder="Repita la contraseña"
                  ></input>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="grid-item-data">
              <Grid
                container
                className="grid-container-data"
                justifyContent="center"
                alignItems="center"
              >
                <button>Actualizar datos</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PerfilUsuario;
