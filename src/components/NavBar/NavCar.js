import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

function NavCar({ cantCar, setCantCar, addCar }) {
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');

	useEffect(() => {
		const LoadData = async () => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`);
				const datos = res.data;
				const dataFilter = datos.filter((dato) => (dato.idUserSession === idUserSession ? dato : null));
				setCantCar(dataFilter.length);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	}, [addCar]);

	return (
		<div className="NavCar">
			<Link to={`/carrito-compras`} className="container-logo-carrito">
				<FontAwesomeIcon icon={faShoppingCart} className="iconCar" />
				<div className="cantItemCar">
					<p>{cantCar}</p>
				</div>
			</Link>
		</div>
	);
}

export default NavCar;
