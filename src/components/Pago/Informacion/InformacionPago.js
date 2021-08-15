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
						<Grid item className="grid-item-infoContactEmail">
							<div>
								<Typography>Información de contacto</Typography>
							</div>
							<div>
								<TextField required className="InputRegistro" name="email" label="Email" variant="outlined" />
							</div>
						</Grid>
						<Grid item></Grid>
					</Grid>
					<Grid container className="grid-item-infoContact-margin-top">
						<Grid item className="grid-item-infoContactDirec">
							<div>
								<Typography>Dirección de envío</Typography>
							</div>
							<Grid container justifyContent="space-between">
								<TextField
									required
									className="InputRegistro InputRegistro-md"
									name="nombre"
									label="Nombre"
									variant="outlined"
								/>
								<TextField
									required
									className="InputRegistro InputRegistro-md"
									name="apellido"
									label="Apellido"
									variant="outlined"
								/>
							</Grid>
							<div>
								<TextField required className="InputRegistro" name="dirección" label="Dirección" variant="outlined" />
							</div>
							<div>
								<TextField
									className="InputRegistro"
									name="dirección2"
									label="Apartamento, local, etc. (opcional)"
									variant="outlined"
								/>
							</div>
							<Grid container justifyContent="space-between">
								<TextField
									required
									className="InputRegistro InputRegistro-md"
									name="codPostal"
									label="Código Postal"
									variant="outlined"
								/>
								<TextField
									required
									className="InputRegistro InputRegistro-md"
									name="ciudad"
									label="Ciudad"
									variant="outlined"
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
								<TextField required className="InputRegistro" name="telefono" label="Teléfono" variant="outlined" />
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
