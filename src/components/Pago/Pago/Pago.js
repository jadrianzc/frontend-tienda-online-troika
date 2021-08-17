import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Menu from '../Menu/Menu';

const Pago = () => {
	return (
		<Container className="container container-user container-infoPago">
			<Grid container className="grid-container-user">
				<Menu />
			</Grid>
		</Container>
	);
};

export default Pago;
