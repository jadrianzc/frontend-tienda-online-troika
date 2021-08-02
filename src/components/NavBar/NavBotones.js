import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBotones() {
  return (
    <div className="NavBotones">
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
      </Link>
    </div>
  );
}

export default NavBotones;
