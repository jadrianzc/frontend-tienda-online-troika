import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import userLogo from '../../assets/images/user_vector.png';
import categoryLogo from '../../assets/images/category_vector.png';
import productsLogo from '../../assets/images/products_vector.png';
import pedidosLogo from '../../assets/images/pedidos_vector.png';
import './Administrador.css';
import Cookies from 'universal-cookie';

const Administrador = ({ setUser }) => {
	const cookies = new Cookies();

	const cerrarseccion = () => {
		if (cookies.get('id')) {
			//sino encuentra ninguna session abierta
			cookies.remove('id', { path: '/' });
			cookies.remove('coki', { path: '/' });
			window.location.hash = '/Login';
			setUser({});
			// window.location.reload();
			//setLogiado('Ingresar')
		}
	};

	return (
		<Container className="container-admin">
			<Grid container className="grid-container-user">
				<Grid item className="grid-item-admin grid-item-admin-title">
					<div className="grid-item-title">
						<Typography className="title">Opciones de administrador</Typography>
						<hr className="underline underline2" />
					</div>
				</Grid>
				<Grid item className="grid-item-admin grid-item-admin-logo">
					<Grid container className="grid-container-adminLogo" justifyContent="space-evenly" alignItems="center">
						<Link to={`/Admin/Usuario`}>
							<Grid item>
								<div className="div-logo">
									<img src={userLogo} alt="Logo-usuario"></img>
								</div>
								<div>
									<h3>Usuarios</h3>
								</div>
							</Grid>
						</Link>
						<Link to={`/Admin/Categorias`}>
							<Grid item>
								<div className="div-logo">
									<img src={categoryLogo} alt="Logo-usuario"></img>
								</div>
								<div>
									<h3>Categorías</h3>
								</div>
							</Grid>
						</Link>
						<Link to={`/Admin/Productos`}>
							<Grid item>
								<div className="div-logo">
									<img src={productsLogo} alt="Logo-usuario"></img>
								</div>
								<div>
									<h3>Productos</h3>
								</div>
							</Grid>
						</Link>
						<Link to={`/Admin/Pedidos`}>
							<Grid item>
								<div className="div-logo">
									<img src={pedidosLogo} alt="Logo-usuario"></img>
								</div>
								<div>
									<h3>Pedidos</h3>
								</div>
							</Grid>
						</Link>
					</Grid>
				</Grid>
				<Grid item className="grid-item-admin grid-item-admin-b">
					<div className="grid-item-admin-btn">
						<button onClick={cerrarseccion}>Cerrar Sesión</button>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Administrador;
