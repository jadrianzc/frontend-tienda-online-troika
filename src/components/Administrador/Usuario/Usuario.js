import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import './Usuario.css';

const Usuario = () => {
	return (
		<Container className="container container-user">
			<Grid container justifyContent="space-between" className="grid-container-add-user">
				<Grid item className="grid-item-user-4">
					<div className="grid-item-title">
						<Typography className="title">Agregar usuario</Typography>
						<hr className="underline" />
					</div>
					<Grid item className="grid-item-user-data">
						<Grid container className="grid-container-user-data">
							<Grid item className="grid-item-info">
								<label>Nombres</label>
								<input type="text"></input>
							</Grid>
							<Grid item className="grid-item-info">
								<label>Apellidos</label>
								<input type="text"></input>
							</Grid>
							<Grid item className="grid-item-info">
								<label>Cédula/RUC</label>
								<input type="text"></input>
							</Grid>
							<Grid item className="grid-item-info">
								<label>E-mail*</label>
								<input type="text"></input>
							</Grid>
							<Grid item className="grid-item-info">
								<label>Contraseña </label>
								<input type="password"></input>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className="grid-item-user-btn">
						<Grid container className="grid-container-user-btn" justifyContent="flex-end" alignItems="center">
							<button>Agregar</button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className="grid-item-user-6">
					<div className="grid-item-title">
						<Typography className="title">Búsqueda</Typography>
						<hr className="underline" />
					</div>
					<Grid item className="grid-item-user-buscar">
						<Grid container>
							<Grid item>
								<label>ID:</label>
							</Grid>
							<Grid item className="">
								<input type="text"></input>
							</Grid>
							<Grid item className="grid-container-user-btn" justifyContent="flex-end" alignItems="center">
								<button>Buscar</button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className="grid-item-user-tabla"></Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Usuario;
