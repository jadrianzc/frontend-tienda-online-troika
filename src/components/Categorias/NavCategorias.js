import React, { useState, useEffect } from 'react';
import './Categorias.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function NavCatregorias() {
	const [categorias, setCategorias] = useState([]); //guardar las categorias obtenidas de la DB

	useEffect(() => {
		const obtenerCate = async () => {
			//OBTENER CATEGORIAS DE LA ddb
			try {
				const res = await axios.get(`https://server-tienda-troika.herokuapp.com/api/v1/categorias`);
				setCategorias(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		obtenerCate();
	}, []);

	return (
		<div className="ContCategoria">
			<div className="CategoriaStatico">
				<h1>Categorías</h1>
				<ul>
					{categorias.map((item) => (
						<li key={item._id} className="LiCategori">
							{item.nombre_categoria}
							<ul>
								{item.sub_categoria.map((sub) => (
									<li key={sub} className="LiSubCategori">
										<NavLink
											exact
											to={`/Categorías/${sub}`}
											className="Categoria-links"
											activeClassName="CategoriaLink-Active"
										>
											{sub}
										</NavLink>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default NavCatregorias;
