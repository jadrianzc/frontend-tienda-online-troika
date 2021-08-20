import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './Pago.css';

const Pago = ({ dataInfo, menuState }) => {
	const history = useHistory();
	const [rows, setRows] = useState([]);
	const [dataProd, setDataProd] = useState([]);
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');
	useEffect(() => {
		const LoadData = async (idUserSession) => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`);
				const dataCarUser = res.data.filter((data) => (data.idUserSession === idUserSession ? data : null));
				setRows(dataCarUser);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData(idUserSession);
		// window.scrollTo(0, 0);
	}, [idUserSession]);

	const handleSubmit = async () => {
		const info = rows.map((row) => {
			return {
				idProd: row.idProd,
				codigo_producto: row.codigo_producto,
				descrip_producto: row.descrip_producto,
				precio_producto: row.precio_producto,
				cantidad_producto: row.cantidad_producto,
			};
		});

		const dataUser = { idUserSession, ...dataInfo, carrito_usuario: info };
		console.log(dataUser);
		await postData(idUserSession, dataUser);
		history.push('/carrito-compras/info-pago/pago/envio');
	};

	const postData = async (idUserSession, data) => {
		const resp = await axios.post(`http://localhost:4000/api/v1/usuarios/${idUserSession}/orden-compra`, data);
		console.log(resp.data);
	};

	return (
		<Container className="container-user container-pago">
			<Grid container className="grid-container-user" alignItems="flex-start">
				<Grid item>
					<Menu menuState={menuState} />
				</Grid>
				<Grid item className="grid-item-carrito-title grid-item-title-pago">
					<div className="grid-item-title">
						<Typography className="title">Pago</Typography>
						<hr className="underline underline-pago" />
					</div>
				</Grid>
				<Grid item className="grid-item-metodoPago">
					<FormGroup row className="grid-item-metodoPago-form">
						<FormControlLabel
							control={<Checkbox checked={true} name="checkedB" color="primary" />}
							label="Depósito / Transferencia Bancaria"
							className="grid-item-metodoPago-form-label"
						/>
						<p className="grid-item-metodoPago-form-p">
							Realice el pago de su pedido a nuestra cuenta en cualquier agencia de nuestro banco asociado o realice una
							transferencia bancaria por el monto a pagar. Los datos de su orden de pago y nuestro número de cuenta
							llegaran a su correo electrónico.
						</p>
					</FormGroup>
				</Grid>
				<Grid item className="grid-item-btn-table">
					<div className="grid-item-admin-btn">
						<button onClick={handleSubmit} type="submit">
							Continuar
						</button>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Pago;
