import React, { useState, useEffect } from 'react';
import { Container, Grid, MenuItem, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { countries } from './countries';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Menu from '../Menu/Menu';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './InformacionPago.css';

const InformacionPago = ({ setDataInfo }) => {
	const history = useHistory();
	const [data, setData] = useState([]);
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');

	useEffect(() => {
		const LoadData = async (idUserSession) => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/usuarios/${idUserSession}`);
				setData(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData(idUserSession);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const datos = Array.from(document.getElementsByName('input-info-data'));
		const dataArray = datos.map((data) => data.value);

		setDataInfo({
			ced_usuario: dataArray[0],
			email_usuario: dataArray[1],
			nomb_usuario: dataArray[2],
			apell_usuario: dataArray[3],
			direcc_usuario: dataArray[4],
			apart_usuario: dataArray[5],
			codPost_usuario: dataArray[6],
			ciudad_usuario: dataArray[7],
			pais_usuario: dataArray[8],
			cel_usuario: dataArray[9],
		});

		history.push('/carrito-compras/info-pago/pago');
	};

	return (
		<Container className="container-user container-infoPago">
			<Grid container className="grid-container-user">
				<Menu />
				<Grid item className="grid-item-infoContact">
					<form onSubmit={(e) => handleSubmit(e)}>
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
										value={data.ced_usuario}
										readOnly
										name="input-info-data"
									/>
									<input
										type="email"
										required
										className="InputRegistro InputRegistro-md"
										name="email"
										placeholder="Email *"
										value={data.email_usuario}
										readOnly
										name="input-info-data"
									/>
								</Grid>
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
										value={data.nomb_usuario}
										readOnly
										name="input-info-data"
									/>
									<input
										type="text"
										required
										className="InputRegistro InputRegistro-md"
										name="apellido"
										placeholder="Apellido *"
										value={data.apell_usuario}
										readOnly
										name="input-info-data"
									/>
								</Grid>
								<div>
									<input
										type="text"
										required
										className="InputRegistro"
										name="dirección"
										placeholder="Dirección *"
										name="input-info-data"
									/>
								</div>
								<div>
									<input
										type="text"
										className="InputRegistro"
										name="dirección2"
										placeholder="Apartamento, local, etc. (opcional)"
										name="input-info-data"
									/>
								</div>
								<Grid container justifyContent="space-between">
									<input
										type="text"
										required
										className="InputRegistro InputRegistro-md"
										name="codPostal"
										placeholder="Código Postal *"
										name="input-info-data"
									/>
									<input
										type="text"
										required
										className="InputRegistro InputRegistro-md"
										name="ciudad"
										placeholder="Ciudad *"
										name="input-info-data"
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
										name="input-info-data"
									>
										{countries.map((opcion) => (
											<MenuItem key={opcion.code} value={opcion.label}>
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
										value={data.cel_usuario}
										readOnly
										name="input-info-data"
									/>
								</div>
								<Grid container justifyContent="flex-end" className="grid-item-infoContactDirec-btn">
									<button type="submit">Continuar</button>
								</Grid>
							</Grid>
						</Grid>
					</form>
					<hr />
					<Typography variant="h7">Términos del servicio</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default InformacionPago;
