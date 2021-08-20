import React from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import './Menu.css';

const Menu = ({ menuState }) => {
	return (
		<Container className="grid-container-menu" alignItems="center">
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				<Link color="inherit" to={`/carrito-compras/info-pago`}>
					Información
				</Link>
				{menuState ? (
					<Link color="inherit" to={`/carrito-compras/info-pago/pago`}>
						Pago
					</Link>
				) : null}
			</Breadcrumbs>
		</Container>
	);
};

export default Menu;
