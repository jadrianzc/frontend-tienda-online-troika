import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavCar() {
	return (
		<div className="NavCar">
			<FontAwesomeIcon icon={faShoppingCart} className="iconCar" />
		</div>
	);
}

export default NavCar;
