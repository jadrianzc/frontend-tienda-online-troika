import React from 'react';
import { Container, Grid, MenuItem, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './InformacionPago.css';
import Menu from '../Menu/Menu';
import { countries } from './countries';

const InformacionPago = () => {
	return (
		<Container className="container container-user container-infoPago">
			<Grid container className="grid-container-user">
				<Menu />
				{/* <Grid item className="grid-item-infoPago"></Grid> */}
				<Grid item className="grid-item-infoContact">
					<Grid container>
						<Grid item className="grid-item-infoContactEmail grid-item-infoContactDirec">
							<div>
								<Typography>Información de contacto</Typography>
							</div>
							<Grid container justifyContent="space-between">
								<input
									type="text"
									required
									className="InputRegistro InputRegistro-md"
									name="cedula"
									placeholder="Cédula *"
								/>
								<input
									type="email"
									required
									className="InputRegistro InputRegistro-md"
									name="email"
									placeholder="Email *"
								/>
							</Grid>
							{/* <div>
								<TextField required className="InputRegistro" name="email" label="Email" variant="outlined" />
							</div> */}
						</Grid>
						<Grid item></Grid>
					</Grid>
					<Grid container className="grid-item-infoContact-margin-top">
						<Grid item className="grid-item-infoContactDirec">
							<div>
								<Typography>Dirección de envío</Typography>
							</div>
							<Grid container justifyContent="space-between">
								<input
									type="text"
									required
									className="InputRegistro InputRegistro-md"
									name="nombre"
									placeholder="Nombre *"
								/>
								<input
									type="text"
									required
									className="InputRegistro InputRegistro-md"
									name="apellido"
									placeholder="Apellido *"
								/>
							</Grid>
							<div>
								<input type="text" required className="InputRegistro" name="dirección" placeholder="Dirección *" />
							</div>
							<div>
								<input
									type="text"
									className="InputRegistro"
									name="dirección2"
									placeholder="Apartamento, local, etc. (opcional)"
								/>
							</div>
							<Grid container justifyContent="space-between">
								<input
									type="text"
									required
									className="InputRegistro InputRegistro-md"
									name="codPostal"
									placeholder="Código Postal *"
								/>
								<input
									type="text"
									required
									className="InputRegistro InputRegistro-md"
									name="ciudad"
									placeholder="Ciudad *"
								/>
							</Grid>
							<div>
								<TextField
									required
									select
									className="InputRegistro InputRegistro-bg"
									name="dirección"
									label="País / región"
									variant="outlined"
								>
									{countries.map((opcion) => (
										<MenuItem key={opcion.code} value={opcion.code}>
											{opcion.label}
										</MenuItem>
									))}
								</TextField>
							</div>
							<div>
								<input
									type="text"
									required
									className="InputRegistro"
									name="telefono"
									placeholder="Teléfono *"
									variant="outlined"
								/>
							</div>
							<Grid container justifyContent="flex-end" className="grid-item-infoContactDirec-btn">
								<button>Continuar</button>
							</Grid>
						</Grid>
					</Grid>
					<hr />
					<Typography variant="h7">Términos del servicio</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default InformacionPago;
