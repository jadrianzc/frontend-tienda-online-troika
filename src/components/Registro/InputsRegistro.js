import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import './Registro.css';
import { CampoNombre, CampoApellido, CampoCedula, CampoEmail, CampoPassword, CampoPassword2 } from './VerificaRegistro';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

function InputsRegistro() {
	const cookies = new Cookies();
	const [openModal, setOpenModal] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const [datos, setDatos] = useState({
		nomb_usuario: '',
		apell_usuario: '',
		ced_usuario: '',
		telf_usuario: '',
		cel_usuario: '',
		email_usuario: '',
		contraseña_usuario: '',
		conf_contraseña: '',
		rol_usuario: 'cliente',
	});

	const [nombre, setNombre] = useState(false); //mensajes de error
	const [errornombre, setErrorNombre] = useState(''); //mensajes de error

	const [apellido, setApellido] = useState(false); //mensajes de error
	const [errorapellido, setErrorApellido] = useState(''); //mensajes de error

	const [cedula, setCedula] = useState(false); //mensajes de error
	const [errorcedula, setErrorCedula] = useState(''); //mensajes de error

	const [email, setEmail] = useState(false); //mensajes de error
	const [erroremail, setErrorEmail] = useState(''); //mensajes de error

	const [pwd, setPwd] = useState(false); //mensajes de error
	const [errorpwd, setErrorPwd] = useState(''); //mensajes de error
	const [pwd2, setPwd2] = useState(false); //mensajes de error
	const [errorpwd2, setErrorPwd2] = useState(''); //mensajes de error

	useEffect(() => {
		iravalida();
	});
	const handleInputChange = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};
	const iravalida = () => {
		CampoNombre(datos, setNombre, setErrorNombre);
		CampoApellido(datos, setApellido, setErrorApellido);
		CampoCedula(datos, setCedula, setErrorCedula);
		CampoEmail(datos, setEmail, setErrorEmail);
		CampoPassword(datos, setPwd, setErrorPwd);
		CampoPassword2(datos, setPwd2, setErrorPwd2);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			nombre === false &&
			apellido === false &&
			cedula === false &&
			email === false &&
			pwd === false &&
			pwd2 === false
		) {
			await axios
				.get('https://server-tienda-troika.herokuapp.com/api/v1/verificaUsuario/' + datos.email_usuario)
				.then((respp) => {
					if (respp.data.length === 1) {
						console.log('correo existe');
						setOpenAlert(true);
					} else {
						setOpenAlert(false);
						RegistrarUsuario();
					}
				});
		} else {
			console.log('hubo un error');
		}
	};

	const RegistrarUsuario = async () => {
		const res = await axios.post('https://server-tienda-troika.herokuapp.com/api/v1/usuarios', datos);
		if (res.status === 200) {
			//si se registro entonces inicia secion
			setOpenModal(true);
			await axios
				.get('https://server-tienda-troika.herokuapp.com/api/v1/verificaUsuario/' + datos.email_usuario)
				.then((resp) => {
					return resp.data;
				})
				.then((resp) => {
					cookies.set('id', resp[0]._id, { path: '/' });
					cookies.set('coki', resp[0], { path: '/' }); // aqui se guarda la session
					//window.location.href = "/";
				});
		}
	};

	const body = (
		<div className="ModalRegistro">
			<h2 id="simple-modal-title">¡Exitoso!</h2>
			<p id="simple-modal-description">Usuario creado exitosamente.</p>
			<input
				type="button"
				className="btnRegistro"
				value="Continuar"
				onClick={() => {
					window.location.href = '/';
				}}
			/>
		</div>
	);

	return (
		<>
			<Collapse in={openAlert} className="AlertRegistro">
				<Alert variant="filled" severity="error">
					Este correo ya existe, por favor utilice otro.
				</Alert>
			</Collapse>
			<form className="FormRegistro" method="post" onSubmit={handleSubmit}>
				<div className="ContInputRegistro1">
					<TextField
						required
						//id="outlined-basic"
						className="InputRegistro"
						name="nomb_usuario"
						label="Nombres"
						variant="outlined"
						onChange={handleInputChange}
						error={nombre}
						helperText={errornombre}
					/>
					<TextField
						required
						//id="outlined-basic"
						className="InputRegistro"
						name="apell_usuario"
						label="Apellidos"
						variant="outlined"
						onChange={handleInputChange}
						error={apellido}
						helperText={errorapellido}
					/>
					<TextField
						required
						//id="outlined-basic"
						className="InputRegistro"
						name="ced_usuario"
						label="Cédula / RUC"
						variant="outlined"
						onChange={handleInputChange}
						error={cedula}
						helperText={errorcedula}
					/>
					<TextField
						inputProps={{ maxLength: 10 }}
						//id="outlined-basic"
						className="InputRegistro"
						name="telf_usuario"
						label="Télefono"
						variant="outlined"
						onChange={handleInputChange}
					/>
					<TextField
						inputProps={{ maxLength: 10 }}
						//id="outlined-basic"
						className="InputRegistro"
						name="cel_usuario"
						label="Celular"
						variant="outlined"
						onChange={handleInputChange}
					/>
				</div>
				<div className="ContInputRegistro2">
					<TextField
						required
						//id="outlined-basic"
						className="InputRegistro"
						name="email_usuario"
						label="E-mail"
						variant="outlined"
						onChange={handleInputChange}
						error={email}
						helperText={erroremail}
					/>
					<TextField
						required
						//id="outlined-basic"
						className="InputRegistro"
						name="contraseña_usuario"
						label="Contraseña"
						type="password"
						variant="outlined"
						onChange={handleInputChange}
						error={pwd}
						helperText={errorpwd}
					/>
					<TextField
						required
						//id="outlined-basic"
						className="InputRegistro"
						name="conf_contraseña"
						label="Repetir contraseña"
						type="password"
						variant="outlined"
						onChange={handleInputChange}
						error={pwd2}
						helperText={errorpwd2}
					/>
					<input type="submit" className="btnRegistro" value="Registrarse" />
					<Modal
						open={openModal}
						//onClose={handleClose}
						className="ModalPadreRegi"
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						{body}
					</Modal>
				</div>
			</form>
		</>
	);
}

export default InputsRegistro;
