import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import NavMenu from './NavMenu';
import NavBuscar from './NavBuscar';
import NavBotones from './NavBotones';
import NavCar from './NavCar';

function NavBar({ cantCar, setCantCar, addCar, setUser, login, setLogin }) {
	const [open, setOpen] = useState(false);

	const OpenMenu = () => {
		setOpen(!open);
	};

	return (
		<div className="NavBar">
			<div className={open ? 'toggle ContNavBar' : 'ContNavBar'}>
				<NavLink to="/" className="navbar-logo">
					<img src={logo} alt="" />
				</NavLink>

				<NavMenu OpenMenu={OpenMenu} />

				<NavBuscar OpenMenu={OpenMenu} />

				<NavBotones OpenMenu={OpenMenu} setUsers={setUser} login={login} setLogin={setLogin} />

				<NavCar cantCar={cantCar} setCantCar={setCantCar} addCar={addCar} />
			</div>
			<NavLink to="/" className="min">
				<img src={logo} alt="" />
			</NavLink>
			<div className="ContIconMenu">
				<FontAwesomeIcon icon={open ? faTimes : faBars} className="iconMenu" onClick={OpenMenu} />
			</div>
		</div>
	);
}

export default NavBar;
