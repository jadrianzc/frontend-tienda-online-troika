import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./Registro.css";
import { CampoNombre } from "./VerificaRegistro";
import { CampoApellido } from "./VerificaRegistro";
import { CampoCedula } from "./VerificaRegistro";
import { CampoEmail } from "./VerificaRegistro";
import { CampoPassword } from "./VerificaRegistro";
import { CampoPassword2 } from "./VerificaRegistro";
import axios from "axios";

function InputsRegistro() {
  const [datos, setDatos] = useState({
    nomb_usuario: "",
    apell_usuario: "",
    ced_usuario: "",
    telf_usuario: "",
    cel_usuario: "",
    email_usuario: "",
    contraseña_usuario: "",
    conf_contraseña: "",
    rol_usuario: "cliente",
  });

  const [nombre, setNombre] = useState(false); //mensajes de error
  const [errornombre, setErrorNombre] = useState(""); //mensajes de error

  const [apellido, setApellido] = useState(false); //mensajes de error
  const [errorapellido, setErrorApellido] = useState(""); //mensajes de error

  const [cedula, setCedula] = useState(false); //mensajes de error
  const [errorcedula, setErrorCedula] = useState(""); //mensajes de error

  const [email, setEmail] = useState(false); //mensajes de error
  const [erroremail, setErrorEmail] = useState(""); //mensajes de error

  const [pwd, setPwd] = useState(false); //mensajes de error
  const [errorpwd, setErrorPwd] = useState(""); //mensajes de error
  const [pwd2, setPwd2] = useState(false); //mensajes de error
  const [errorpwd2, setErrorPwd2] = useState(""); //mensajes de error

  useEffect(() => {
    iravalida();
  });
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const iravalida = () => {
    CampoNombre(datos, setNombre, setErrorNombre);
    CampoApellido(datos, setApellido, setErrorApellido);
    CampoCedula(datos, setCedula, setErrorCedula);
    CampoEmail(datos, setEmail, setErrorEmail);
    CampoPassword(datos, setPwd, setErrorPwd);
    CampoPassword2(datos, setPwd2, setErrorPwd2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datos);
    if (
      nombre === false &&
      apellido === false &&
      cedula === false &&
      email === false &&
      pwd === false &&
      pwd2 === false
    ) {
      const res = await axios.post(
        "http://localhost:4000/api/v1/usuarios",
        datos
      );
      console.log(res.data);
      console.log("se fue");
    } else {
      console.log("hubo un error");
    }
  };

  return (
    <form className="FormRegistro" method="post" onSubmit={handleSubmit}>
      <div className="ContInputRegistro1">
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="nomb_usuario"
          label="Nombres"
          variant="outlined"
          onChange={handleInputChange}
          error={nombre}
          helperText={errornombre}
        />
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="apell_usuario"
          label="Apellidos"
          variant="outlined"
          onChange={handleInputChange}
          error={apellido}
          helperText={errorapellido}
        />
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="ced_usuario"
          label="Cédula / RUC"
          variant="outlined"
          onChange={handleInputChange}
          error={cedula}
          helperText={errorcedula}
        />
        <TextField
          inputProps={{ maxLength: 10 }}
          //id="outlined-basic"
          className="InputRegistro"
          name="telf_usuario"
          label="Télefono"
          variant="outlined"
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{ maxLength: 10 }}
          //id="outlined-basic"
          className="InputRegistro"
          name="cel_usuario"
          label="Celular"
          variant="outlined"
          onChange={handleInputChange}
        />
      </div>
      <div className="ContInputRegistro2">
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="email_usuario"
          label="E-mail"
          variant="outlined"
          onChange={handleInputChange}
          error={email}
          helperText={erroremail}
        />
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="contraseña_usuario"
          label="Contraseña"
          type="password"
          variant="outlined"
          onChange={handleInputChange}
          error={pwd}
          helperText={errorpwd}
        />
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="conf_contraseña"
          label="Repetir contraseña"
          type="password"
          variant="outlined"
          onChange={handleInputChange}
          error={pwd2}
          helperText={errorpwd2}
        />
        <input type="submit" className="btnRegistro" value="Registrarse" />
      </div>
    </form>
  );
}

export default InputsRegistro;
