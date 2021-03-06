import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import './Login.css';

const Login = ({ setUser }) => {
	const cookies = new Cookies();
	const [openAlert, setOpenAlert] = useState(false);
	const [datos, setDatos] = useState({
		email: '',
		password: '',
	});

	const handleInputChange = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.get('https://server-tienda-troika.herokuapp.com/api/v1/verificaUsuario/' + datos.email)
			.then((res) => {
				return res.data;
			})
			.then((res) => {
				if (res.length > 0) {
					//setErroruser(false);
					if (res[0].contraseña_usuario === datos.password) {
						//si los datos son correcto guarda session en las cookies e inicia
						cookies.set('id', res[0]._id, { path: '/' });
						cookies.set('coki', res[0], { path: '/' }); // aqui se guarda la session
						if (res[0].rol_usuario === 'admin') {
							window.location.hash = '/Admin';
							setUser(res[0]);
							// window.location.reload();
						} else {
							window.location.hash = '/';
							setUser(res[0]);
							// window.location.reload();
						}
					} else {
						setOpenAlert(true);
						console.log('Contraseña incorrecta');
					}
				} else {
					setOpenAlert(true);
					console.log('El correo del usuario esta incorrecto');
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div style={{ paddingTop: '63px' }}>
			<Container className="container" maxWidth="xl">
				<Grid container className="grid-container">
					<Grid item className="grid-item grid-item-img-login" xs={12} md={6}>
						<div className="container-img"></div>
					</Grid>
					<Grid item className="grid-item" xs={12} md={6}>
						<div className="container-login">
							<form className="form" onSubmit={handleSubmit}>
								<div className="container-title">
									<h1>Iniciar Sesión</h1>
									<hr className="separador" />
								</div>
								<div className="container-login-items">
									<div className="container-login-email">
										<FontAwesomeIcon icon={faEnvelope} className="iconCar" />
										<TextField
											required
											type="email"
											className="email"
											label="e-mail"
											name="email"
											onChange={handleInputChange}
										/>
									</div>
									<div className="container-login-pass">
										<FontAwesomeIcon icon={faLock} className="iconCar" />
										<TextField
											required
											type="password"
											className="pass"
											label="contraseña"
											name="password"
											onChange={handleInputChange}
										/>
									</div>
									<Collapse in={openAlert} className="AlertLogin">
										<Alert variant="filled" severity="error">
											El correo o la contraseña son incorrectos.
										</Alert>
									</Collapse>

									<div className="container-login-submit">
										<input type="submit" name="" value="Login" />
									</div>
								</div>
							</form>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
