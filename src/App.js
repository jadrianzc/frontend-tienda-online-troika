import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import Producto from './components/Categorias/Producto/Producto';
import Categorias from './components/Categorias/Catregorias';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';
import Administrador from './components/Administrador/Administrador';
import Usuario from './components/Administrador/Usuario/Usuario';

const theme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: '#25A6D9',
		},
		secondary: {
			// This is green.A700 as hex.
			main: '#3E3F40',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Inicio} />
					<Route path="/Login" exact component={Login} />
					<Route path="/Registro" exact component={Registro} />\
					<Route path="/Producto/:id" exact component={Producto} />
					<Route path="/Categorías/:id" exact component={Categorias} />
					<Route path="/PerfilUsuario" exact component={PerfilUsuario} />
					<Route path="/Admin" exact component={Administrador} />
					<Route path="/Admin/Usuario" exact component={Usuario} />
				</Switch>
				{/* <Footer />  */}
			</Router>
		</ThemeProvider>
	);
}

export default App;
