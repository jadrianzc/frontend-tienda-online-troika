import React, { useEffect, useState } from 'react';
import { Grid, Modal, Snackbar, Backdrop, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

function TablaProductos(props) {
	const classes = useStyles();
	const [openCarga, setOpenCarga] = React.useState(false);

	const openAbreCarga = () => {
		setOpenCarga(!openCarga);
	};

	const [openModal, setOpenModal] = useState(false);
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);
	const [openAlertEdit, setOpenAlertEdit] = useState(false);

	const [documentos, setDocumentos] = useState([]);
	const [tablaCategori, setTablaCategori] = useState([]);

	const [datos, setDatos] = useState({
		codigo_producto: '',
		nom_producto: '',
		descrip_producto: '',
		categoria_producto: '',
		precio_producto: '',
		marca_auto: '',
		modelo_auto: '',
		modelo_producto: '',
		cantidad_producto: '',
	});
	const [categorias, setCategorias] = useState([]);

	const [idproduc, setIdproduc] = useState('');

	const [estado, setEtado] = useState(false);

	useEffect(() => {
		console.log(props.valorBusqueda.buscategori);
		if (props.valorBusqueda.buscodigo || props.valorBusqueda.buscategori) {
			console.log('busca');
			const FiltrarProductos = (termino) => {
				console.log(termino);
				let resbusqueda = tablaCategori.filter((doc) => {
					if (termino.buscodigo) {
						if (doc.codigo_producto.toLowerCase().includes(termino.buscodigo.toString().toLowerCase())) {
							return doc;
						}
					} else if (termino.buscategori) {
						if (
							doc.categoria_producto.toString().toLowerCase().includes(termino.buscategori.toString().toLowerCase())
						) {
							return doc;
						}
					}
				});
				setDocumentos(resbusqueda);
			};
			FiltrarProductos(props.valorBusqueda);
		}
	}, [props.valorBusqueda]);

	useEffect(() => {
		//console.log(stado);
		setOpenCarga(true);
		console.log('abre');
		const LoadData = async () => {
			try {
				await axios.get(`https://server-tienda-troika.herokuapp.com/api/v1/productos`).then((res) => {
					setDocumentos(res.data);
					setTablaCategori(res.data);
					setOpenCarga(false);
					console.log('cierra');
				});
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	}, [props.stado, estado]);

	/*
	 * Eliminar
	 */
	const EliminaProcuc = async () => {
		try {
			await axios.delete(`https://server-tienda-troika.herokuapp.com/api/v1/productos/${idproduc}`);
			setEtado(!estado);
			setOpenModal(false);
			setOpenAlert(true);
		} catch (error) {
			console.log(error);
		}
	};

	const IdElimina = (doc) => {
		setOpenModal(true);
		setIdproduc(doc);
	};
	const bodyElimi = (
		<div className="ModalRegistro">
			<h2 id="simple-modal-title">Eliminar Producto</h2>
			<p id="simple-modal-description">¿Esta seguro de eliminar El Producto?</p>
			<input type="button" className="btnPwd btnPwdAcep" value="Continuar" onClick={EliminaProcuc} />
			<input
				type="button"
				className=" btnPwd btnPwdCan"
				value="Cancelar"
				onClick={() => {
					setOpenModal(false);
				}}
			/>
		</div>
	);
	/** */

	/*
	 *Edit
	 */
	const AbreElEdit = async (doc) => {
		setOpenModalEdit(true);
		setDatos(doc);
		try {
			const res = await axios.get('https://server-tienda-troika.herokuapp.com/api/v1/categorias');
			setCategorias(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handlechangeProduc = async (e) => {
		await setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const AcrualizaProduc = async () => {
		try {
			await axios.put(`https://server-tienda-troika.herokuapp.com/api/v1/productos/${datos._id}`, datos);
			setEtado(!estado);
			setOpenModalEdit(false);
			setOpenAlertEdit(true);
		} catch (error) {
			console.log(error);
		}
	};

	const bodyEdit = (
		<div className="ModalAgregaProduct">
			<h1 className="title-usuario title-Produc">Actualizar producto</h1>
			<Grid container className="grid-container-user-data user-edit">
				<Grid container item xs={3}>
					<input
						accept="image/*"
						name="foto"
						id="contained-button-file"
						multiple
						type="file"
						//onChange={uploadImage}
					/>
				</Grid>
				<Grid container item xs={9} spacing={3}>
					<Grid item className="grid-item-info" xs={6}>
						<label>Código:</label>
						<input
							type="text"
							name="codigo_producto"
							value={datos.codigo_producto}
							required
							onChange={handlechangeProduc}
						/>
					</Grid>
					<Grid item className="grid-item-info" xs={3}>
						<label>Marca de auto:</label>
						<input type="text" name="marca_auto" value={datos.marca_auto} required onChange={handlechangeProduc} />
					</Grid>
					<Grid item className="grid-item-info" xs={3}>
						<label>Modelo de auto:</label>
						<input type="text" name="modelo_auto" value={datos.modelo_auto} required onChange={handlechangeProduc} />
					</Grid>
					<Grid item className="grid-item-info" xs={6}>
						<label>Nombre:</label>
						<input type="text" name="nom_producto" value={datos.nom_producto} required onChange={handlechangeProduc} />
					</Grid>
					<Grid item className="grid-item-info" xs={6}>
						<label>Modelo de producto:</label>
						<input
							type="text"
							name="modelo_producto"
							value={datos.modelo_producto}
							required
							onChange={handlechangeProduc}
						/>
					</Grid>
					<Grid item className="grid-item-info" xs={6}>
						<label>Categoría:</label>
						<select
							name="categoria_producto"
							id="categoria_producto"
							value={datos.categoria_producto}
							onChange={handlechangeProduc}
						>
							<option aria-label="None" value="" />
							{categorias.map((mar) =>
								mar.sub_categoria.map((sub) => (
									<option key={sub} value={sub}>
										{sub}
									</option>
								))
							)}
						</select>
					</Grid>
					<Grid item className="grid-item-info" xs={3}>
						<label>Stock:</label>
						<input
							type="number"
							name="cantidad_producto"
							value={datos.cantidad_producto}
							required
							onChange={handlechangeProduc}
						/>
					</Grid>
					<Grid item className="grid-item-info" xs={3}>
						<label>Precio:</label>
						<input
							type="number"
							name="precio_producto"
							value={datos.precio_producto}
							required
							onChange={handlechangeProduc}
						/>
					</Grid>
					<Grid item className="grid-item-info" xs={12}>
						<label>Descripción</label>
						<input
							type="text"
							name="descrip_producto"
							value={datos.descrip_producto}
							required
							onChange={handlechangeProduc}
						/>
					</Grid>
				</Grid>
			</Grid>

			<input type="submit" className="btnPwd btnPwdAcep" value="Agregar" onClick={AcrualizaProduc} />
			<input
				type="button"
				className=" btnPwd btnPwdCan"
				value="Cancelar"
				onClick={() => {
					setOpenModalEdit(false);
					setDatos({
						imgurl: '',
						codigo_producto: '',
						nom_producto: '',
						descrip_producto: '',
						categoria_producto: '',
						precio_producto: '',
						marca_auto: '',
						modelo_auto: '',
						modelo_producto: '',
						cantidad_producto: '',
					});
				}}
			/>
		</div>
	);
	/** */

	/** */
	const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenAlert(false);
		setOpenAlertEdit(false);
	};
	/** */

	return (
		<div style={{ height: 400, width: '100%' }}>
			<Backdrop className={classes.backdrop} open={openCarga}>
				<CircularProgress size={100} />
			</Backdrop>
			{openModalEdit ? (
				<h1>modal abierta</h1>
			) : (
				<TableContainer style={{ maxHeight: '100%', width: '100%', textAlign: 'center' }}>
					<Table stickyHeader>
						<TableHead className="TableHead">
							<TableRow>
								<TableCell>Código</TableCell>
								<TableCell>Nombre</TableCell>
								<TableCell>Descripción</TableCell>
								<TableCell>Categoría</TableCell>
								<TableCell>Precio</TableCell>
								<TableCell>Marca</TableCell>
								<TableCell>Modelo</TableCell>
								<TableCell>Cantidad</TableCell>
								<TableCell>Acciones</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{documentos.map((doc) => (
								<TableRow key={doc._id}>
									<TableCell>{doc.codigo_producto}</TableCell>
									<TableCell>{doc.nom_producto}</TableCell>
									<TableCell>{doc.descrip_producto}</TableCell>
									<TableCell>{doc.categoria_producto}</TableCell>
									<TableCell>{doc.precio_producto}</TableCell>
									<TableCell>{doc.marca_auto}</TableCell>
									<TableCell>{doc.modelo_producto}</TableCell>
									<TableCell>{doc.cantidad_producto}</TableCell>
									<TableCell>
										<div className="contAccioAdmin">
											<button className="btnEditAdmin" onClick={() => AbreElEdit(doc)}>
												Edit
											</button>
											<button className="btnElimAdmin" onClick={() => IdElimina(doc._id)}>
												Del
											</button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			{/* Modal elimina */}
			<Modal
				open={openModal}
				//onClose={handleClose}
				className="ModalPadreRegi"
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{bodyElimi}
			</Modal>

			<Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
				<Alert variant="filled" onClose={handleCloseAlert} severity="success">
					El producto se eliminó correctamente.
				</Alert>
			</Snackbar>
			{/* Modal Edit */}
			<Modal
				open={openModalEdit}
				//onClose={handleClose}
				className="ModalPadreRegi"
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{bodyEdit}
			</Modal>
			<Snackbar open={openAlertEdit} autoHideDuration={3000} onClose={handleCloseAlert}>
				<Alert variant="filled" onClose={handleCloseAlert} severity="success">
					El producto se actualizó correctamente.
				</Alert>
			</Snackbar>
		</div>
	);
}

export default TablaProductos;
