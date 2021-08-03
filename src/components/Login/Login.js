import React from 'react';
import './Login.css';

import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
});

const Login = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<div className="container-img">
					<img src="" alt="Imagen-Troika" />
				</div>
				<div className="container-login">
					<form>
						<div>
							<h1>Iniciar Sesión</h1>
							<hr className="separador" />
						</div>
						<div className="container-login-items">
							<div className="container-login-email">
								<FontAwesomeIcon icon={faEnvelope} className="iconCar" />
								<TextField type="email" className="email" id="standard-basic" label="e-mail" />
							</div>
							<div className="container-login-pass">
								<FontAwesomeIcon icon={faLock} className="iconCar" />
								<TextField type="password" className="pass" id="standard-basic" label="contraseña" />
							</div>

							<div className="container-login-submit">
								<input type="submit" name="" value="Login" />
							</div>
						</div>
					</form>
				</div>
			</CardContent>
		</Card>
		// <div className="container">
		// 	<div className="container-content">
		// <div className="container-img">
		// 	<img src="" alt="Imagen-Troika" />
		// </div>
		// <div className="container-login">
		// 	<form>
		// 		<div>
		// 			<h1>Iniciar Sesión</h1>
		// 			<hr className="separador" />
		// 		</div>
		// 		<div className="container-login-items">
		// 			<div className="container-login-email">
		// 				<FontAwesomeIcon icon={faEnvelope} className="iconCar" />
		// 				<TextField type="email" className="email" id="standard-basic" label="e-mail" />
		// 			</div>
		// 			<div className="container-login-pass">
		// 				<FontAwesomeIcon icon={faLock} className="iconCar" />
		// 				<TextField type="password" className="pass" id="standard-basic" label="contraseña" />
		// 			</div>

		// 			<div className="container-login-submit">
		// 				<input type="submit" name="" value="Login" />
		// 			</div>
		// 		</div>
		// 	</form>
		// </div>
		// 	</div>
		// </div>
	);
};

export default Login;
