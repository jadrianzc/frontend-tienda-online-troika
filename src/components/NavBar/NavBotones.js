import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function NavBotones() {
  const cookies = new Cookies();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    correo: "",
  });

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    session();
  }, []);

  const session = () => {
    //verificar si hay alguna session
    if (cookies.get("id")) {
      const cokiapell = cookies.get("coki").apell_usuario.split(" ")[0];
      const cokinomb = cookies.get("coki").nomb_usuario.split(" ")[0];

      setUser({
        nombre: cokinomb,
        apellido: cokiapell,
        correo: cookies.get("coki").email_usuario,
      });
      setLogin(true);
    }
  };
  const cerrarseccion = () => {
    if (cookies.get("id")) {
      //sino encuentra ninguna session abierta
      cookies.remove("id", { path: "/" });
      window.location.href = "/";
      //setLogiado('Ingresar')
    }
  };
  return (
    <div className="NavBotones">
      {login ? (
        <div className="MenuSession-container">
          <button onClick={onClick} className="MenuSession-trigger">
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
            />
            <span>{user.apellido + " " + user.nombre}</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <nav
            ref={dropdownRef}
            className={`MenuSession ${isActive ? "active" : "inactive"}`}
          >
            <div className="MenuSession-contenido">
              <img
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                alt="User avatar"
              />
              <span>
                <p>{user.apellido + " " + user.nombre}</p>
                {user.correo}
              </span>
            </div>
            <ul>
              <li>
                <Link to="/PerfilUsuario" onClick={onClick}>
                  Perfil de Troika
                </Link>
              </li>
              <li>
                <Link to="/PerfilUsuario" onClick={onClick}>
                  Historial de transacciones
                </Link>
              </li>
            </ul>
            <input
              type="button"
              className="BtnCerrarSession"
              onClick={cerrarseccion}
              value="Cerrar sesión"
            />
          </nav>
        </div>
      ) : (
        <>
          <Link className="linkBtnNav" to="/Login">
            <input
              type="button"
              className="btnNav btnNavIni"
              value="Iniciar sesión"
            />
          </Link>
          <Link className="linkBtnNav" to="/Registro">
            <input
              type="button"
              className="btnNav btnNavRegi"
              value="Registrarse"
            />
          </Link>{" "}
        </>
      )}
    </div>
  );
}

export default NavBotones;
