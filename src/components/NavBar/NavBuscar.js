import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBuscar() {
	return (
		<div className="NavBuscador">
			<FontAwesomeIcon icon={faSearch} className="iconBuscar" />
			<input type="text" placeholder="Buscar..." className="buscador" name="buscador" />
		</div>
	);
}

export default NavBuscar;
