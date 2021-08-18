import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavCatregorias from '../Categorias/NavCategorias';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Busqueda() {
	const { nombre } = useParams();
	const [documentos, setDocumentos] = useState([]);

	useEffect(() => {
		const LoadData = async () => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/buscaProducto/${nombre}`);
				setDocumentos(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	}, [nombre]);

	return (
		<div className="ContInicio">
			{console.log(documentos)}
			<NavCatregorias />
			<div className="ContProducts">
				<p>Busqueda: {nombre}</p>
				<Grid container spacing={3} className="GripContainer">
					{documentos.map((card) => (
						<Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={card._id}>
							<Link to={`/Producto/${card._id}`} className="LinkCardProducts">
								{/*redirecciona al producto, enviando el id*/}
								<Card className="CardProducts">
									<CardMedia image={card.imgurl} className="CardMedia" />
									<CardContent>
										<h1>{card.nom_producto}</h1>
										<p>{card.descrip_producto}</p>
										<span>$ {card.precio_producto}</span>
									</CardContent>
								</Card>
							</Link>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Busqueda;
