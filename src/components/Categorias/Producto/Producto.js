import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useCounter } from '../../../hooks/useCounter';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import NavCatregorias from '../NavCategorias';
import './Producto.css';

const Producto = ({ addCar, setAddCar, setEstadoProduCar }) => {
	const { id } = useParams();
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');

	const [documentos, setDocumentos] = useState({});
	const [estado, setEstado] = useState(true);
	const [openAlert, setOpenAlert] = useState(false);
	const [openAlertErr, setOpenAlertErr] = useState(false);

	useEffect(() => {
		const LoadData = async () => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/productos/${id}`);
				setDocumentos(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
		window.scrollTo(0, 0);
	}, [id]);

	const { counter, increment, decrement } = useCounter(1);

	// handleAddCar
	const handleAddCar = async (idUserSession) => {
		const productoAdd = {
			...documentos,
			cantidad_producto: counter,
			idUserSession: idUserSession,
			estado,
		};

		const resp = await axios.post(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`, productoAdd);
		if (resp.data.status === 'Guardado') {
			setOpenAlert(true);
			setAddCar(!addCar);
			console.log('listo');
		} else {
			setOpenAlertErr(true);
			console.log('error');
		}
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenAlert(false);
		setOpenAlertErr(false);
	};

	return (
		<Grid container>
			<Grid item xs={2}>
				<NavCatregorias />
			</Grid>
			<Grid item xs={10}>
				<Container className="container-producto">
					<Grid container className="grid-container-producto">
						<Snackbar open={openAlert} autoHideDuration={5000} onClose={handleClose}>
							<Alert variant="filled" onClose={handleClose} severity="success">
								Producto añadido al carrito.
							</Alert>
						</Snackbar>
						<Snackbar open={openAlertErr} autoHideDuration={5000} onClose={handleClose}>
							<Alert variant="filled" onClose={handleClose} severity="error">
								Para agregar al carrito debe iniciar sesión.
							</Alert>
						</Snackbar>
						<Grid item className="grid-img grid-content grid-item" xs={12} md={6}>
							<Grid container className="grid-container-det">
								<Grid item className="grid-container-det-1">
									<div className="container-imgs">
										<img src={documentos.imgurl} alt="Imagen-Producto" />
									</div>
								</Grid>
								<Grid item className="grid-container-det-2">
									<p>Imagen referencial</p>
								</Grid>
							</Grid>
						</Grid>
						<Grid item className="grid-content grid-item" xs={12} md={6}>
							<Grid container className="grid-container-det">
								<Grid item xs={12} className="grid-item-descrip">
									<h1>{documentos.descrip_producto}</h1>
								</Grid>
								<Grid item xs={12} className="grid-item-precio">
									$ {documentos.precio_producto}
								</Grid>
								<Grid item xs={12} className="grid-item-btn">
									<div className="container-btn">
										<p>Cantidad:</p>
										<div className="btn-cantidad">
											<button onClick={() => decrement(2)}>-</button>
											<button>{counter}</button>
											<button onClick={() => increment(2)}>+</button>
										</div>
										<button
											className="btn-addCarrito"
											onClick={() => {
												handleAddCar(idUserSession);
											}}
										>
											Añadir al carrito
										</button>
									</div>
								</Grid>
								<Grid item xs={12} className="container-descrip-product">
									<h4>Descripción:</h4>
									<p>{documentos.descrip_producto}</p>
									<p>
										<span>Marca: </span>
										{documentos.modelo_producto}
									</p>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Grid>
		</Grid>
	);
};

export default Producto;
