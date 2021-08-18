import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductosMasVendidos() {
	const [documentos, setDocumentos] = useState([]);

	useEffect(() => {
		const LoadData = async () => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/productos`);
				setDocumentos(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	}, []);
	return (
		<>
			{documentos
				.filter((card) => {
					if (card.mas_vendidos) {
						return card;
					}
				})
				.map((card) => (
					<Grid item xs={12} sm={12} md={6} lg={3} key={card._id}>
						<Link to={`/Producto/${card._id}`} className="LinkCardProducts">
							{/*redirecciona al producto, enviando el id*/}
							<Card className="CardProducts">
								<CardMedia image={card.imgurl} className="CardMedia" />
								<CardContent></CardContent>
								<h1>{card.nom_producto}</h1>
								<p>{card.descrip_producto}</p>
								<span>$ {card.precio_producto}</span>
							</Card>
						</Link>
					</Grid>
				))}
		</>
	);
}

export default ProductosMasVendidos;
