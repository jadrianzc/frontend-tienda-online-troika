import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Container, Grid, Typography } from "@material-ui/core";
import "./PerfilUsuario.css";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {
  CampoNombre,
  CampoApellido,
  CampoCedula,
  CampoEmail,
  CampoPassword,
  CampoPassword2,
} from "../Registro/VerificaRegistro";
import Modal from "@material-ui/core/Modal";

const PerfilUsuario = () => {
  const cookies = new Cookies();
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [datos, setDatos] = useState({});
  const [datosPwd, setDatosPwd] = useState({});

  const [nombre, setNombre] = useState(false); //mensajes de error
  const [errornombre, setErrorNombre] = useState(""); //mensajes de error

  const [apellido, setApellido] = useState(false); //mensajes de error
  const [errorapellido, setErrorApellido] = useState(""); //mensajes de error

  const [cedula, setCedula] = useState(false); //mensajes de error
  const [errorcedula, setErrorCedula] = useState(""); //mensajes de error

  const [email, setEmail] = useState(false); //mensajes de error
  const [erroremail, setErrorEmail] = useState(""); //mensajes de error

  const [pwdActual, setPwdActual] = useState(false); //mensajes de error
  const [errorpwdActual, setErrorPwdActual] = useState(""); //mensajes de error
  const [pwd, setPwd] = useState(false); //mensajes de error
  const [errorpwd, setErrorPwd] = useState(""); //mensajes de error
  const [pwd2, setPwd2] = useState(false); //mensajes de error
  const [errorpwd2, setErrorPwd2] = useState(""); //mensajes de error

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/usuarios/${cookies.get("id")}`
        );
        setDatos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
  }, []);

  useEffect(() => {
    iravalida();
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(apellido);

    if (
      nombre === false &&
      apellido === false &&
      cedula === false &&
      email === false
    ) {
      await axios
        .put(
          "http://localhost:4000/api/v1/usuarios/" + cookies.get("id"),
          datos
        )
        .then((res) => {
          setOpenAlert(true);
          console.log("listo");
        });
    } else {
      console.log("error");
    }
    console.log(datos);
  };

  //contraseña
  const handleChangePwd = (e) => {
    setDatosPwd({
      ...datosPwd,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPwd = (e) => {
    e.preventDefault();
  };

  const BtnPwd = () => {
    console.log(datosPwd.pwdActual);
    console.log(datos.contraseña_usuario);
    if (datosPwd.pwdActual !== datos.contraseña_usuario) {
      console.log("contraseña no iguales");
      setPwdActual(true);
      setErrorPwdActual("La contraseña no coincide");
    } else if (
      pwd === false &&
      pwd2 === false &&
      datosPwd.contraseña_usuario &&
      datosPwd.conf_contraseña
    ) {
      setPwdActual(false);
      setErrorPwdActual("");
      setOpenModal(true);
    }
  };

  const CambiaPwd = async () => {
    const nuevapwd = Object.assign(datos, datosPwd);
    await axios
      .put(
        "http://localhost:4000/api/v1/usuarios/" + cookies.get("id"),
        nuevapwd
      )
      .then((res) => {
        setOpenAlert(true);
        cookies.remove("id", { path: "/" });
        cookies.remove("coki", { path: "/" });
        window.location.href = "/Login";
      });
  };
  //

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const body = (
    <div className="ModalRegistro">
      <h2 id="simple-modal-title">Cambiar contraseña</h2>
      <p id="simple-modal-description">
        ¿Esta seguro de cambiar la contraseña?
      </p>
      <input
        type="button"
        className="btnPwd btnPwdAcep"
        value="Continuar"
        onClick={CambiaPwd}
      />
      <input
        type="button"
        className=" btnPwd btnPwdCan"
        value="Cancelar"
        onClick={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );

  const iravalida = () => {
    CampoNombre(datos, setNombre, setErrorNombre);
    CampoApellido(datos, setApellido, setErrorApellido);
    CampoCedula(datos, setCedula, setErrorCedula);
    CampoEmail(datos, setEmail, setErrorEmail);
    CampoPassword(datosPwd, setPwd, setErrorPwd);
    CampoPassword2(datosPwd, setPwd2, setErrorPwd2);
  };

  return (
    <Container className="container-user">
      <Grid container className="grid-container-user">
        <Snackbar
          open={openAlert}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert variant="filled" onClose={handleClose} severity="success">
            Se actualizaron los datos correctamente.
          </Alert>
        </Snackbar>
        <Grid item className="grid-item-perfil">
          <div className="grid-item-title">
            <Typography className="title">Perfil de la cuenta</Typography>
            <hr className="underline" />
          </div>
          <form onSubmit={handleSubmit}>
            <Grid container className="grid-item-col">
              <Grid item className="grid-item-img">
                <img src={datos.imgurl} alt="Imagen-Usuario" />
              </Grid>
              <Grid item className="grid-item-data">
                <Grid container className="grid-container-data">
                  <Grid item className="grid-item-info">
                    <label>Nombres*</label>
                    <TextField
                      className="impu"
                      variant="outlined"
                      name="nomb_usuario"
                      type="text"
                      value={datos.nomb_usuario}
                      onChange={handleChange}
                      error={nombre}
                      helperText={errornombre}
                    />
                  </Grid>
                  <Grid item className="grid-item-info">
                    <label>Apellidos*</label>
                    <TextField
                      className="impu"
                      variant="outlined"
                      type="text"
                      name="apell_usuario"
                      value={datos.apell_usuario}
                      onChange={handleChange}
                      error={apellido}
                      helperText={errorapellido}
                    />
                  </Grid>
                  <Grid item className="grid-item-info">
                    <label>Cédula/RUC*</label>
                    <TextField
                      className="impu"
                      variant="outlined"
                      name="ced_usuario"
                      type="text"
                      value={datos.ced_usuario}
                      onChange={handleChange}
                      error={cedula}
                      helperText={errorcedula}
                    />
                  </Grid>
                  <Grid item className="grid-item-info">
                    <label>Teléfono</label>
                    <TextField
                      inputProps={{ maxLength: 10 }}
                      className="impu"
                      variant="outlined"
                      name="telf_usuario"
                      type="text"
                      value={datos.telf_usuario}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className="grid-item-data">
                <Grid container className="grid-container-data2">
                  <Grid item className="grid-item-info2">
                    <label>E-mail*</label>
                    <TextField
                      className="impu"
                      variant="outlined"
                      name="email_usuario"
                      type="text"
                      value={datos.email_usuario}
                      onChange={handleChange}
                      error={email}
                      helperText={erroremail}
                    />
                  </Grid>
                  <Grid item className="grid-item-info">
                    <label>Celular</label>
                    <TextField
                      inputProps={{ maxLength: 10 }}
                      className="impu"
                      variant="outlined"
                      name="cel_usuario"
                      type="text"
                      value={datos.cel_usuario}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  className="Btn-grid-container-data1 Btn-data"
                  justifyContent="center"
                  alignItems="center"
                >
                  <button type="submit">Actualizar datos</button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item className="grid-item-seguridad">
          <div className="grid-item-title">
            <Typography className="title">Seguridad</Typography>
            <hr className="underline" />
          </div>
          <Grid container className="grid-item-col">
            <Grid item className="grid-item-data grid-item-margin">
              <form onSubmit={handleSubmitPwd}>
                <Grid container className="grid-container-data">
                  <Grid item className="grid-item-info3">
                    <label>Contraseña actual</label>
                    <TextField
                      className="impu"
                      name="pwdActual"
                      variant="outlined"
                      type="password"
                      onChange={handleChangePwd}
                      error={pwdActual}
                      helperText={errorpwdActual}
                    />
                  </Grid>
                  <Grid item className="grid-item-info3">
                    <label>Nueva contraseña</label>
                    <TextField
                      className="impu"
                      name="contraseña_usuario"
                      type="password"
                      variant="outlined"
                      onChange={handleChangePwd}
                      error={pwd}
                      helperText={errorpwd}
                    />
                  </Grid>
                  <Grid item className="grid-item-info3">
                    <label>Repita la contraseña</label>
                    <TextField
                      className="impu"
                      name="conf_contraseña"
                      type="password"
                      variant="outlined"
                      onChange={handleChangePwd}
                      error={pwd2}
                      helperText={errorpwd2}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item className="grid-item-data">
              <Grid
                container
                className="Btn-grid-container-data2 Btn-data"
                justifyContent="center"
                alignItems="center"
              >
                <button onClick={BtnPwd}>Actualizar Contraseña</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={openModal}
        //onClose={handleClose}
        className="ModalPadreRegi"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Container>
  );
};

export default PerfilUsuario;
