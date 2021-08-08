import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';

const Producto = () => {
	const [data, setData] = useState({
		producto: 'A',
		precio: '45.5',
	});

	return (
		<Container>
			<Grid container>
				<Grid item className="grid-item" xs={6}>
					<div>
						<img src="" alt="Imagen-Producto" />
					</div>
				</Grid>
				<Grid item className="grid-item" xs={6}>
					<Grid container>
						<Grid item xs={12}>
							<h1>{data.producto}</h1>
						</Grid>
						<Grid item xs={12}>
							<span>$</span>
							{data.precio}
						</Grid>
						<Grid item xs={12}>
							<div>
								<p>Cantidad</p>
								<div className="btn-cantidad">
									<button type="button">-</button>
									<button type="button">0</button>
									<button type="button">+</button>
								</div>
								<button type="submit">Añadir al carrito</button>
							</div>
						</Grid>
						<Grid item xs={12}>
							<h4>Descripción:</h4>
							<p>Lorem ipsum</p>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Producto;
