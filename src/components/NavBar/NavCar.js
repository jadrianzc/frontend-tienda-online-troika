import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

function NavCar() {
	const [item, setItem] = useState(0);
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');

	useEffect(() => {
		const LoadData = async () => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`);
				const datos = res.data;
				const dataFilter = datos.filter((dato) => (dato.idUserSession === idUserSession ? dato : null));
				// console.log(dataFilter);
				setItem(dataFilter.length);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	});

	return (
		<div className="NavCar">
			<Link to={`/carrito-compras`} className="container-logo-carrito">
				<FontAwesomeIcon icon={faShoppingCart} className="iconCar" />
				<div className="cantItemCar">{item}</div>
			</Link>
		</div>
	);
}

export default NavCar;
