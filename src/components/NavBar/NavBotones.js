import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function NavBotones({ OpenMenu, setUsers, login, setLogin }) {
	const cookies = new Cookies();
	const [user, setUser] = useState({});

	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const onClick = () => setIsActive(!isActive);

	useEffect(() => {
		const session = async () => {
			//verificar si hay alguna session
			if (cookies.get('id')) {
				try {
					const res = await axios.get(
						`https://server-tienda-troika.herokuapp.com/api/v1/usuarios/${cookies.get('id')}`
					);
					setUser(res.data);
				} catch (error) {
					console.log(error);
				}
				setLogin(true);
			}
		};
		session();
	}, [cookies.get('id')]);

	const cerrarseccion = () => {
		if (cookies.get('id')) {
			//sino encuentra ninguna session abierta
			cookies.remove('id', { path: '/' });
			cookies.remove('coki', { path: '/' });
			// window.location.href = '#/Login';
			window.location.hash = '/Login';
			setUsers({});
			setLogin(false);
			// window.location.reload();
			//setLogiado('Ingresar')
		}
	};
	return (
		<div className="NavBotones">
			{login ? (
				<div className="MenuSession-container">
					<button onClick={onClick} className="MenuSession-trigger">
						<img src={user.imgurl} alt="User avatar" />
						<span>{user.apell_usuario + ' ' + user.nomb_usuario}</span>
						<FontAwesomeIcon icon={faAngleDown} />
					</button>
					<nav ref={dropdownRef} className={`MenuSession ${isActive ? 'active' : 'inactive'}`}>
						<div className="MenuSession-contenido">
							<img src={user.imgurl} alt="User avatar" />
							<span>
								<p>{user.apell_usuario + ' ' + user.nomb_usuario}</p>
								{user.email_usuario}
							</span>
						</div>
						<ul>
							<li>
								<Link
									to="/PerfilUsuario"
									onClick={() => {
										onClick();
										OpenMenu();
									}}
								>
									Perfil de Troika
								</Link>
							</li>
							<li>
								<Link
									to="/HistorialTransacciones"
									onClick={() => {
										onClick();
										OpenMenu();
									}}
								>
									Historial de transacciones
								</Link>
							</li>
						</ul>
						<input type="button" className="BtnCerrarSession" onClick={cerrarseccion} value="Cerrar sesión" />
					</nav>
				</div>
			) : (
				<>
					<Link className="linkBtnNav" to="/Login">
						<input type="button" className="btnNav btnNavIni" value="Iniciar sesión" onClick={OpenMenu} />
					</Link>
					<Link className="linkBtnNav" to="/Registro">
						<input type="button" className="btnNav btnNavRegi" value="Registrarse" onClick={OpenMenu} />
					</Link>{' '}
				</>
			)}
		</div>
	);
}

export default NavBotones;
