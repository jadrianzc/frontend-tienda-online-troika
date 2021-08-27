import React, { useState } from 'react';
import { Container, Grid, Typography, Snackbar } from '@material-ui/core';
import '../Usuario/Usuario.css';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import TablaCategorias from './TablaCategorias';

function AdminCategorias() {
	const [openAlert, setOpenAlert] = useState(false);
	const [stado, setStado] = useState(false);

	const [datos, setDatos] = useState({
		nombre_categoria: '',
		sub_categoria: '',
	});

	const handleInputChange = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let newData = {
			nombre_categoria: datos.nombre_categoria,
			sub_categoria: datos.sub_categoria.split(','),
		};
		try {
			await axios.post('https://server-tienda-troika.herokuapp.com/api/v1/categorias', newData);
			console.log('enviaso');
			setDatos({
				nombre_categoria: '',
				sub_categoria: '',
			});
			setStado(!stado);
			setOpenAlert(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenAlert(false);
	};

	return (
		<Container className="container container-user container-admin">
			<Grid container justifyContent="space-between" className="grid-container-add-user">
				<Grid item className="grid-item-user-4">
					<div className="grid-item-title">
						<Typography className="title-usuario title">Agregar categoría</Typography>
					</div>
					<Grid item className="grid-item-user-data">
						<form method="post" onSubmit={handleSubmit}>
							<Grid container className="grid-container-user-data">
								<Grid item className="grid-item-info">
									<label>Categoria</label>
									<input
										type="text"
										name="nombre_categoria"
										value={datos.nombre_categoria}
										required
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item className="grid-item-info">
									<label>Sub categorias</label>
									<input
										type="text"
										name="sub_categoria"
										value={datos.sub_categoria}
										required
										placeholder="Pastilla,Disco,..."
										onChange={handleInputChange}
									/>
								</Grid>
							</Grid>
							<Grid container className="grid-container-user-btn" justifyContent="flex-end" alignItems="center">
								<button type="submit">Agregar</button>
							</Grid>
						</form>
					</Grid>
				</Grid>
				<Grid item className="grid-item-user-6">
					<div className="grid-item-title">
						<Typography className="title-usuario title">Búsqueda de categoría</Typography>
					</div>
					<Grid item className="grid-item-user-buscar">
						<Grid item className="grid-item-user-tabla">
							<TablaCategorias stado={stado} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
				<Alert variant="filled" onClose={handleCloseAlert} severity="success">
					La categoría se creó correctamente.
				</Alert>
			</Snackbar>
		</Container>
	);
}

export default AdminCategorias;
