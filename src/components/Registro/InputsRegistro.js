import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./Registro.css";
import { CampoNombre } from "./VerificaRegistro";
import { CampoApellido } from "./VerificaRegistro";
import { CampoCedula } from "./VerificaRegistro";
import { CampoEmail } from "./VerificaRegistro";
import { CampoPassword } from "./VerificaRegistro";
import { CampoPassword2 } from "./VerificaRegistro";

function InputsRegistro() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    email: "",
    pwd: "",
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

  return (
    <form className="FormRegistro">
      <div className="ContInputRegistro1">
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="nombre"
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
          name="apellido"
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
          name="cedula"
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
          name="telefono"
          label="Télefono"
          variant="outlined"
        />
        <TextField
          inputProps={{ maxLength: 10 }}
          //id="outlined-basic"
          className="InputRegistro"
          name="celular"
          label="Celular"
          variant="outlined"
        />
      </div>
      <div className="ContInputRegistro2">
        <TextField
          required
          //id="outlined-basic"
          className="InputRegistro"
          name="email"
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
          name="pwd"
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
          name="pwd2"
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
