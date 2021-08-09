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
				</Switch>
				{/* <Footer />  */}
			</Router>
		</ThemeProvider>
	);
}

export default App;
