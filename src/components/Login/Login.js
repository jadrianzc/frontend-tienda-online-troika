import React from 'react';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	return (
		<div className="container">
			<div className="container-content">
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
								<input type="email" name="" value="" placeholder="e-mail" />
							</div>
							<div className="container-login-pass">
								<FontAwesomeIcon icon={faLock} className="iconCar" />
								<input type="password" name="" value="" placeholder="contraseña" />
							</div>

							<div className="container-login-submit">
								<input type="submit" name="" value="Login" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
