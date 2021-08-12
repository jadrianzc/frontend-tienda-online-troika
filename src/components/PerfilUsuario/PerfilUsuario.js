import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import './PerfilUsuario.css';

const PerfilUsuario = () => {
	return (
		<Container className="container container-user">
			<Grid container className="grid-container-user">
				<Grid item className="grid-item-perfil">
					<div className="grid-item-title">
						<Typography className="title">Perfil de la cuenta</Typography>
						<hr className="underline" />
					</div>
					<Grid container className="grid-item-col">
						<Grid item className="grid-item-img">
							<img src="" alt="Imagen-Usuario" />
						</Grid>
						<Grid item className="grid-item-data">
							<Grid container className="grid-container-data">
								<Grid item className="grid-item-info">
									<label>Nombres*</label>
									<input type="text"></input>
								</Grid>
								<Grid item className="grid-item-info">
									<label>Apellidos*</label>
									<input type="text"></input>
								</Grid>
								<Grid item className="grid-item-info">
									<label>Cédula/RUC*</label>
									<input type="text"></input>
								</Grid>
								<Grid item className="grid-item-info">
									<label>Teléfono</label>
									<input type="text"></input>
								</Grid>
								<Grid item className="grid-item-info">
									<label>Celular*</label>
									<input type="text"></input>
								</Grid>
							</Grid>
						</Grid>
						<Grid item className="grid-item-data">
							<Grid container className="grid-container-data2">
								<Grid item className="grid-item-info2">
									<label>E-mail*</label>
									<input type="text"></input>
								</Grid>
								<Grid item className="grid-item-info2">
									<label>Sexo*</label>
									<input type="text"></input>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className="grid-item-seguridad">
					<div className="grid-item-title">
						<Typography className="title">Seguridad</Typography>
						<hr className="underline" />
					</div>
					<Grid container className="grid-item-col">
						<Grid item className="grid-item-data grid-item-margin">
							<Grid container className="grid-container-data">
								<Grid item className="grid-item-info3">
									<label>Contraseña actual</label>
									<input type="password" placeholder="Contraseña actual"></input>
								</Grid>
								<Grid item className="grid-item-info3">
									<label>Nueva contraseña</label>
									<input type="password" placeholder="Nueva contraseña"></input>
								</Grid>
								<Grid item className="grid-item-info3">
									<label>Repita la contraseña</label>
									<input type="password" placeholder="Repita la contraseña"></input>
								</Grid>
							</Grid>
						</Grid>
						<Grid item className="grid-item-data">
							<Grid container className="grid-container-data" justifyContent="center" alignItems="center">
								<button>Actualizar datos</button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PerfilUsuario;
