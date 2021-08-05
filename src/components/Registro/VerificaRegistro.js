//Campo de Nombre Verifica
export const CampoNombre = (datos, setNombre, setErrorNombre) => {
  const exnombre = /^[a-zA-ZÀ-ÿ\s]{4,20}$/; // Letras y espacios, pueden llevar acentos.
  if (datos.nomb_usuario) {
    if (!datos.nomb_usuario.match(exnombre)) {
      setNombre(true);
      setErrorNombre(
        "El nombre debe ser de 4 a 20 digitos y solo debe contener letras."
      );
    } else {
      setNombre(false);
      setErrorNombre("");
    }
  }
};

//Campo de Apellido Verifica
export const CampoApellido = (datos, setApellido, setErrorApellido) => {
  const exapellido = /^[a-zA-ZÀ-ÿ\s]{4,20}$/; // Letras y espacios, pueden llevar acentos.
  if (datos.apell_usuario) {
    if (!datos.apell_usuario.match(exapellido)) {
      setApellido(true);
      setErrorApellido(
        "El apellido debe ser de 4 a 20 digitos y solo debe contener letras."
      );
    } else {
      setApellido(false);
      setErrorApellido("");
    }
  }
};

//Campo de Cedula Verifica
export const CampoCedula = (datos, setCedula, setErrorCedula) => {
  const excedula = /^[0-9]{10}$/; // 7 a 14 numeros.
  if (datos.ced_usuario) {
    if (!datos.ced_usuario.match(excedula)) {
      setCedula(true);
      setErrorCedula(
        "la cedula debe ser de 10 digitos y solo debe contener numeros."
      );
    } else {
      setCedula(false);
      setErrorCedula("");
    }
  }
};

//Campo de Email Verifica
export const CampoEmail = (datos, setEmail, setErrorEmail) => {
  const excorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (datos.email_usuario) {
    if (!datos.email_usuario.match(excorreo)) {
      setEmail(true);
      setErrorEmail("verifique que el correo este bien escrito.");
    } else {
      setEmail(false);
      setErrorEmail("");
    }
  }
};
//Campo de Password Verifica
export const CampoPassword = (datos, setPwd, setErrorPwd) => {
  const expwd = /^.{4,15}$/; // 4 a 12 digitos.
  if (datos.contraseña_usuario) {
    if (!datos.contraseña_usuario.match(expwd)) {
      setPwd(true);
      setErrorPwd("La contraseña debe ser de 4 a 15 digitos.");
    } else {
      setPwd(false);
      setErrorPwd("");
    }
  }
};

//Campo de Password Iguales Verifica
export const CampoPassword2 = (datos, setPwd2, setErrorPwd2) => {
  if (datos.conf_contraseña) {
    if (datos.contraseña_usuario !== datos.conf_contraseña) {
      setPwd2(true);
      setErrorPwd2("Las contraseñas no son iguales.");
    } else {
      setPwd2(false);
      setErrorPwd2("");
    }
  }
};
