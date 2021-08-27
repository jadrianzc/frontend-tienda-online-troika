import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Inicio from '../components/Inicio/Inicio';
import Agencias from '../components/Agencias/Agencias';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';
import Login from '../components/Login/Login';
import Registro from '../components/Registro/Registro';
import Producto from '../components/Categorias/Producto/Producto';
import Categorias from '../components/Categorias/Catregorias';
import Busqueda from '../components/Busqueda/Busqueda';
import PerfilUsuario from '../components/PerfilUsuario/PerfilUsuario';
import HistorialTransacciones from '../components/HistorialTransacciones/HistorialTransacciones';
import InformacionPago from '../components/Pago/Informacion/InformacionPago';
import Pago from '../components/Pago/Pago/Pago';
import PagoFinal from '../components/Pago/Pago/PagoFinal/PagoFinal';
import CarritoCompras from '../components/CarritoCompras/CarritoCompras';

import Administrador from '../components/Administrador/Administrador';
import AdminProductos from '../components/Administrador/Productos/AdminProductos';
import Usuario from '../components/Administrador/Usuario/Usuario';
import AdminCategorias from '../components/Administrador/Categorias/AdminCategorias';
import AdminPedidos from '../components/Administrador/Pedidos/AdminPedidos';

import Error404 from '../components/Error404/Error404';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RouteCli from './RouteCli';
import RouteCliCompo from './RouteCliCompo';
import { useState } from 'react';
import Cookies from 'universal-cookie';

export default function AppRouter() {
	const [cantCar, setCantCar] = useState(0);
	const [addCar, setAddCar] = useState(false);
	const [dataInfo, setDataInfo] = useState({});
	const [menuState, setMenuState] = useState(true);
	const [estadoProduCar, setEstadoProduCar] = useState(false);
	const [user, setUser] = useState();
	const [login, setLogin] = useState(false);

	return (
		<Router>
			{user && user.rol_usuario === 'admin' ? (
				<></>
			) : (
				<NavBar
					cantCar={cantCar}
					setCantCar={setCantCar}
					addCar={addCar}
					setUser={setUser}
					login={login}
					setLogin={setLogin}
				/>
			)}
			<Switch>
				{/* Normal */}
				<RouteCli exact path="/" render={() => <Inicio setCantCar={setCantCar} />} />
				<RouteCliCompo exact path="/Quienes-somos" component={QuienesSomos} />
				<RouteCliCompo exact path="/Agencias" component={Agencias} />
				<RouteCli exact path="/Login" render={() => <Login setUser={setUser} />} />
				<PublicRoute exact path="/Registro" render={() => <Registro setLogin={setLogin} />} />
				<Route
					exact
					path="/Producto/:id"
					render={() => <Producto addCar={addCar} setAddCar={setAddCar} setEstadoProduCar={setEstadoProduCar} />}
				/>
				<RouteCliCompo path="/Categorías/:id" exact component={Categorias} />
				<RouteCliCompo path="/Busqueda/:nombre" exact component={Busqueda} />
				<PrivateRoute path="/PerfilUsuario" exact render={() => <PerfilUsuario setLogin={setLogin} />} />
				<PrivateRoute exact path="/HistorialTransacciones" component={HistorialTransacciones} />

				<Route
					exact
					path="/carrito-compras"
					render={() => (
						<CarritoCompras
							addCar={addCar}
							setAddCar={setAddCar}
							setEstadoProduCar={setEstadoProduCar}
							estadoProduCar={estadoProduCar}
						/>
					)}
				/>
				<PrivateRoute
					exact
					path="/carrito-compras/info-pago"
					render={() => <InformacionPago setDataInfo={setDataInfo} />}
				/>
				<PrivateRoute
					exact
					path="/carrito-compras/info-pago/pago"
					render={() => <Pago dataInfo={dataInfo} menuState={menuState} setAddCar={setAddCar} addCar={addCar} />}
				/>
				<PrivateRoute exact path="/carrito-compras/info-pago/pago/envio" component={PagoFinal} />
				{/*  */}

				{/* Administracion */}
				<PrivateRoute exact hasRole="admin" path="/Admin" render={() => <Administrador setUser={setUser} />} />
				<PrivateRoute exact hasRole="admin" path="/Admin/Productos" component={AdminProductos} />
				<PrivateRoute exact hasRole="admin" path="/Admin/Usuario" component={Usuario} />
				<PrivateRoute exact hasRole="admin" path="/Admin/Categorias" component={AdminCategorias} />
				<PrivateRoute exact hasRole="admin" path="/Admin/Pedidos" component={AdminPedidos} />
				{/*  */}

				{/* Error 404 */}
				<Route component={Error404} />
			</Switch>
		</Router>
	);
}
