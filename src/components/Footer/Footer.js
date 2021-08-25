import React from 'react';
import { NavLink } from 'react-router-dom';
import ImgGrupoTroika from '../../assets/images/grupo-troika.png';
import ImgMapMarker from '../../assets/images/map-marker-alt-solid.png';
import ImgMail from '../../assets/images/envelope-solid.png';
import ImgPhone from '../../assets/images/phone-alt-solid.png';
import ImgWhatsapp from '../../assets/images/whatsapp-brands.png';
import './Footer.css';

const Footer = () => {
	return (
		<div className="container-footer">
			<div className="container-footer-item1">
				<div className="item1-footer">
					<div>
						<img src={ImgGrupoTroika} alt="logo-grupoTroika" />
					</div>
				</div>
				<div className="item1-footer">
					<h5>INFORMACIÓN</h5>
					<ul>
						<NavLink to="/Agencias" className="item1-footer-li">
							<li>Agencias</li>
						</NavLink>
						<NavLink to="/Quienes-somos" className="item1-footer-li">
							<li>Quienes Somos</li>
						</NavLink>
						<NavLink to="/carrito-compras" className="item1-footer-li">
							<li>Carrito de compras</li>
						</NavLink>
						<NavLink to="/PerfilUsuario" className="item1-footer-li">
							<li>Perfil</li>
						</NavLink>
					</ul>
				</div>
				<div className="item1-footer">
					<h5>PRODUCTOS</h5>
					<ul>
						<NavLink to="/Categorías/Amortiguador" className="item1-footer-li">
							<li>Amortiguadores</li>
						</NavLink>
						<NavLink to="/" className="item1-footer-li">
							<li>Discos de freno</li>
						</NavLink>
						<NavLink to="/Categorías/Pastilla" className="item1-footer-li">
							<li>Pastillas de freno</li>
						</NavLink>
						<NavLink to="/Categorías/Terminal" className="item1-footer-li">
							<li>Terminal de dirección</li>
						</NavLink>
					</ul>
				</div>
				<div className="item1-footer">
					<h5>CONTACTO</h5>
					<ul>
						<li>
							<div className="item1-footer-contacto">
								<img src={ImgMapMarker} alt="logo-map-marker" />
								<p>Av. 4 de Noviembre, entre calle J-12 y J-14</p>
							</div>
						</li>
						<li>
							<div className="item1-footer-contacto">
								<img src={ImgMail} alt="logo-map-marker" />
								<p>grupotroika@gmail.com</p>
							</div>
						</li>
						<li>
							<div className="item1-footer-contacto">
								<img src={ImgPhone} alt="logo-map-marker" />
								<p>0998694410</p>
							</div>
						</li>
						<li>
							<div className="item1-footer-contacto">
								<img src={ImgWhatsapp} alt="logo-map-marker" />
								<p>0998179005</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="container-footer-item2">
				<p>
					Creado por: C. A. Y. E <span>&copy;</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
