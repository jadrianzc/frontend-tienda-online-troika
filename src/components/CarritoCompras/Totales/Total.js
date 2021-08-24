import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Total.css';

const Total = ({ rows, idUserSession }) => {
	let total = 0;
	let subtotal = 0;
	let envio = 0;
	let dsct = 0;
	let iva = 0;

	rows.map((row) => {
		if (row.idUserSession === idUserSession) {
			const op = row.cantidad_producto * row.precio_producto;
			total = total + op;
		}
	});

	subtotal = parseFloat((total / 1.12).toFixed(2));
	iva = parseFloat((subtotal * 0.12).toFixed(2));

	return (
		<Grid container className="grid-container-total" direction="column" alignItems="flex-end">
			<Grid item className="grid-item-total">
				<div className="grid-item-title grid-item-title-carrito">
					<Typography className="title">Total del carrito</Typography>
				</div>
			</Grid>
			<Grid item className="grid-item-total">
				<div className="div-item-total">
					<div className="div-item div-item-title">Subtotal</div>
					<div className="div-item">$ {subtotal.toFixed(2)}</div>
					<div className="div-item div-item-title">Envío</div>
					<div className="div-item">$ {envio.toFixed(2)}</div>
					<div className="div-item div-item-title">Descuento</div>
					<div className="div-item">$ {dsct.toFixed(2)}</div>
					<div className="div-item div-item-title">IVA</div>
					<div className="div-item">$ {iva.toFixed(2)}</div>
					<div className="div-item div-item-title">Total</div>
					<div className="div-item div-item-title">$ {total.toFixed(2)}</div>
				</div>
			</Grid>
		</Grid>
	);
};

export default Total;
