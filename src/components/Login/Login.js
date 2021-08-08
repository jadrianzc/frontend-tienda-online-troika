import React, { useState } from 'react';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Login = () => {
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

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Container className="container" maxWidth="xl">
			<Grid container className="grid-container">
				<Grid item className="grid-item" xs={6}>
					<div className="container-img">
						<img src="" alt="Imagen-Troika" />
					</div>
				</Grid>
				<Grid item className="grid-item" xs={6}>
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
										type="email"
										className="email"
										id="standard-basic"
										label="e-mail"
										name="email"
										onChange={handleInputChange}
									/>
								</div>
								<div className="container-login-pass">
									<FontAwesomeIcon icon={faLock} className="iconCar" />
									<TextField
										type="password"
										className="pass"
										id="standard-basic"
										label="contraseña"
										name="password"
										onChange={handleInputChange}
									/>
								</div>

								<div className="container-login-submit">
									<input type="submit" name="" value="Login" />
								</div>
							</div>
						</form>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
