import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Login from '../Login/Login';

function NavBotones() {
	return (
		<div className="NavBotones">
			<Link exact to="/Login">
				<input type="button" onClick={Login} className="btnNav btnNavIni" value="Iniciar sesión" />
			</Link>
			<Link exact to="/Registro">
				<input type="button" className="btnNav btnNavRegi" value="Registrarse" />
			</Link>
		</div>
	);
}

export default NavBotones;
