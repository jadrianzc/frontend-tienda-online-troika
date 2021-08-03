import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavMenu({ OpenMenu }) {
	return (
		<>
			<ul className="nav-menu gripi">
				<li className="nav-item">
					<NavLink
						exact //saber donde estas exactamente
						to="/" //aqui la ruta
						className="nav-links"
						activeClassName="NavLink-Active"
						onClick={OpenMenu}
					>
						Inicio
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink exact to="/Categorías" className="nav-links" activeClassName="NavLink-Active" onClick={OpenMenu}>
						Categorías
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink exact to="/Agencias" className="nav-links" activeClassName="NavLink-Active" onClick={OpenMenu}>
						Agencias
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink exact to="/Quienes-somos" className="nav-links" activeClassName="NavLink-Active" onClick={OpenMenu}>
						Quienes somos
					</NavLink>
				</li>
			</ul>
		</>
	);
}

export default NavMenu;
