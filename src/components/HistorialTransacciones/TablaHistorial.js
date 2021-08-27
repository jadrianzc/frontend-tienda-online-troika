import React, { useEffect, useState } from 'react';
import { Grid, Modal, Snackbar, TextareaAutosize } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import axios from 'axios';
import Cookies from 'universal-cookie';

function TablaHistorial(props) {
	const [openModal, setOpenModal] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const [estado, setEtado] = useState(false);

	const [documentos, setDocumentos] = useState([]);
	const [tablaPedidos, setTablaPedidos] = useState([]);
	const [datos, setDatos] = useState({ carrito_usuario: [] });

	const cookies = new Cookies();
	const idUserSession = cookies.get('id');

	useEffect(() => {
		if (props.valorBusqueda.busCedula || props.valorBusqueda.busFechaIni) {
			const FiltrarPedidos = (termino) => {
				const fechaInicial = `${termino.busFechaIni.getFullYear()}-${termino.busFechaIni.getMonth() + 1}-${
					termino.busFechaIni.getDate() + 1
				}`;

				const fechaFinal = `${termino.busFechaFin.getFullYear()}-${termino.busFechaFin.getMonth() + 1}-${
					termino.busFechaFin.getDate() + 2
				}`;

				let resbusqueda = tablaPedidos.filter((doc) => {
					if (termino.busCedula) {
						if (doc.ced_usuario.toLowerCase().includes(termino.busCedula.toString().toLowerCase())) {
							return doc;
						}
					} else if (termino.busFechaIni) {
						if (doc.f_creacion_ordenCompra >= fechaInicial && doc.f_creacion_ordenCompra < fechaFinal) {
							console.log(fechaFinal);
							return doc;
						}
					}
				});
				setDocumentos(resbusqueda);
			};
			FiltrarPedidos(props.valorBusqueda);
		}
	}, [props.valorBusqueda]);

	useEffect(() => {
		const LoadData = async () => {
			console.log(props.valueRadio);
			try {
				const res = await axios.get(`https://server-tienda-troika.herokuapp.com/api/v1/pedidos/user/${idUserSession}`);
				setDocumentos(res.data);
				setTablaPedidos(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	}, [props.stado, props.valueRadio, estado]);

	/*
	 *Detalle
	 */

	const bodyDetalle = (
		<div className="ModalAgregaProduct">
			<h1 className="title-usuario title-Produc">Actualizar producto</h1>
			<Grid container className="grid-container-user-data user-edit">
				<Grid container item xs={12} spacing={3}>
					<Grid container item xs={6} spacing={3}>
						<Grid item className="grid-item-info" xs={12}>
							<label>Cedula:</label>
							<input
								type="text"
								//name="codigo_producto"
								value={datos.ced_usuario}
								disabled
							/>
						</Grid>
						<Grid item className="grid-item-info" xs={12}>
							<label>Nombre Cliente:</label>
							<input
								type="text"
								//name="marca_auto"
								value={datos.nomb_usuario + datos.apell_usuario}
								disabled
							/>
						</Grid>
					</Grid>
					<Grid container item xs={6} spacing={3}>
						<Grid item className="grid-item-info" xs={12} direction="row">
							<label>Productos:</label>
							<TextareaAutosize
								maxRows={7}
								minRows={7}
								disabled
								style={{ resize: 'none' }}
								defaultValue={datos.carrito_usuario
									.map(
										(prod) => '(' + prod.cantidad_producto.toString() + ') ' + prod.descrip_producto.toString() + '\n\n'
									)
									.join('')}
							/>
						</Grid>
					</Grid>
					<Grid container item xs={6} spacing={3}>
						<Grid item className="grid-item-info" xs={12}>
							<label>Celular:</label>
							<input
								type="text"
								//name="modelo_auto"
								value={datos.cel_usuario}
								disabled
							/>
						</Grid>
						<Grid item className="grid-item-info" xs={12}>
							<label>Direccion:</label>
							<input
								type="text"
								//name="nom_producto"
								value={datos.direcc_usuario}
								disabled
							/>
						</Grid>
					</Grid>
					<Grid container item xs={6} spacing={3}>
						<Grid item className="grid-item-info" xs={6}>
							<label>Cantidad:</label>
							<input
								type="text"
								//name="modelo_producto"
								value={datos.carrito_usuario.length}
								disabled
							/>
						</Grid>
						<Grid item className="grid-item-info" xs={6}>
							<label>Precio:</label>
							<input
								type="number"
								//name="cantidad_producto"
								value={datos.total_carrito}
								disabled
							/>
						</Grid>
						<Grid item className="grid-item-info" xs={6}>
							<label>Fecha:</label>
							<input
								type="text"
								//name="precio_producto"
								value={datos.f_creacion_ordenCompra}
								disabled
							/>
						</Grid>
						<Grid item className="grid-item-info" xs={6}>
							<label>Estado:</label>
							<input
								type="text"
								//name="descrip_producto"
								value={datos.estado}
								disabled
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<input type="button" className=" btnPwd btnPwdCan" value="Cerrar" onClick={() => setOpenModal(false)} />
		</div>
	);
	/** */

	return (
		<div style={{ height: 400, width: '100%' }}>
			<TableContainer style={{ maxHeight: '100%', width: '100%' }}>
				<Table stickyHeader>
					<TableHead className="TableHead">
						<TableRow>
							<TableCell>CI. Cliente</TableCell>
							<TableCell>Cantidad</TableCell>
							<TableCell>Productos</TableCell>
							<TableCell>Precio</TableCell>
							<TableCell>Fecha</TableCell>
							<TableCell>Estado</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{documentos.map((doc) => (
							<TableRow key={doc._id}>
								<TableCell>{doc.ced_usuario}</TableCell>
								<TableCell>{doc.carrito_usuario.length}</TableCell>
								<TableCell style={{ maxHeight: '50px' }}>
									{doc.carrito_usuario.slice(0, 3).map((prod) => (
										<p style={{ margin: '0' }}>
											{'(' + prod.cantidad_producto.toString() + ') ' + prod.descrip_producto.toString()}
										</p>
									))}
								</TableCell>
								<TableCell>{doc.total_carrito}</TableCell>
								<TableCell>{doc.f_creacion_ordenCompra}</TableCell>
								<TableCell>
									{doc.estado === 'pagado' ? (
										<span style={{ color: 'darkorange', fontWeight: 'bold' }}>Pagado</span>
									) : doc.estado === 'entregado' ? (
										<span style={{ color: 'green', fontWeight: 'bold' }}>Entregado</span>
									) : (
										<span style={{ color: 'red', fontWeight: 'bold' }}>Pendiente</span>
									)}
								</TableCell>
								<TableCell>
									<button
										onClick={() => {
											setOpenModal(true);
											setDatos(doc);
										}}
										className="btnPronciAdmin"
									>
										Ver Detalle
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{/* Modal Detalle */}
			<Modal
				open={openModal}
				//onClose={handleClose}
				className="ModalPadreRegi"
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{bodyDetalle}
			</Modal>
			{/* <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose={handleCloseAlert} severity="success">
          El producto se actualizó correctamente.
        </Alert>
      </Snackbar> */}
		</div>
	);
}

export default TablaHistorial;
