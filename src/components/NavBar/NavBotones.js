import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function NavBotones() {
  const cookies = new Cookies();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const session = async () => {
      //verificar si hay alguna session
      if (cookies.get("id")) {
        try {
          const res = await axios.get(
            `http://localhost:4000/api/v1/usuarios/${cookies.get("id")}`
          );
          setUser(res.data);
        } catch (error) {
          console.log(error);
        }
        setLogin(true);
      }
    };
    session();
  }, []);

  const cerrarseccion = () => {
    if (cookies.get("id")) {
      //sino encuentra ninguna session abierta
      cookies.remove("id", { path: "/" });
      cookies.remove("coki", { path: "/" });
      window.location.href = "/Login";
      //setLogiado('Ingresar')
    }
  };
  return (
    <div className="NavBotones">
      {login ? (
        <div className="MenuSession-container">
          <button onClick={onClick} className="MenuSession-trigger">
            <img src={user.imgurl} alt="User avatar" />
            <span>{user.apell_usuario + " " + user.nomb_usuario}</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <nav
            ref={dropdownRef}
            className={`MenuSession ${isActive ? "active" : "inactive"}`}
          >
            <div className="MenuSession-contenido">
              <img src={user.imgurl} alt="User avatar" />
              <span>
                <p>{user.apell_usuario + " " + user.nomb_usuario}</p>
                {user.email_usuario}
              </span>
            </div>
            <ul>
              <li>
                <Link to="/PerfilUsuario" onClick={onClick}>
                  Perfil de Troika
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
