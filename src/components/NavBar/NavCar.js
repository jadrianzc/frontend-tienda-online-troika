import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavCar() {
	return (
		<div className="NavCar">
			<Link to={`/carrito-compras`}>
				<FontAwesomeIcon icon={faShoppingCart} className="iconCar" />
			</Link>
		</div>
	);
}

export default NavCar;
