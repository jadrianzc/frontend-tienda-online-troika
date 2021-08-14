import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useCounter } from '../../hooks/useCounter';
import './CarritoCompras.css';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(img, producto, precio) {
	return { img, producto, precio };
}

const rows = [
	createData(
		'https://www.mansuera.com/uploads/subcategorias/f018e94119ba956763fd6e2fca53d559f08d2022.jpeg?v20210614',
		'ACEITE SAE 10W40 SL JASO MA-2/MA / CUARTO ZSIN MODELO GEN',
		'15.32'
	),
	createData(
		'https://www.mansuera.com/uploads/subcategorias/f018e94119ba956763fd6e2fca53d559f08d2022.jpeg?v20210614',
		'ACEITE SAE 10W40 SL JASO MA-2/MA / CUARTO ZSIN MODELO GEN',
		'15.32'
	),
];

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const CarritoCompras = () => {
	const classes = useStyles();
	const { counter, increment, decrement } = useCounter();
	return (
		<Container className="container container-user container-carrito">
			<Grid container className="grid-container-user grid-container-carrito" alignItems="flex-start">
				<Grid item className="grid-item-carrito-title">
					<div className="grid-item-title">
						<Typography className="title">Carrito de compras</Typography>
						<hr className="underline" />
					</div>
				</Grid>
				<Grid item className="grid-item-carrito-table">
					<TableContainer className="grid-tableContainer-carrito" component={Paper}>
						<Table className={classes.table} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell></StyledTableCell>
									<StyledTableCell align="center">Imagen</StyledTableCell>
									<StyledTableCell align="center">Producto</StyledTableCell>
									<StyledTableCell align="center">Precio</StyledTableCell>
									<StyledTableCell align="center">Cantidad</StyledTableCell>
									<StyledTableCell align="center">Total</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<StyledTableRow key={row._id}>
										<StyledTableCell align="center" component="th" scope="row">
											<button className="btn-delete">x</button>
										</StyledTableCell>
										<StyledTableCell align="center">
											<img src={row.img} alt="Imagen-Producto"></img>
										</StyledTableCell>
										<StyledTableCell align="center">{row.producto}</StyledTableCell>
										<StyledTableCell align="center">$ {row.precio}</StyledTableCell>
										<StyledTableCell align="center">
											<div className="btn-cantidad">
												<button onClick={() => decrement(2)}>-</button>
												<button>{counter}</button>
												<button onClick={(e) => increment(2)}>+</button>
											</div>
										</StyledTableCell>
										<StyledTableCell align="center">$ {counter * row.precio}</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
				<Grid item className="grid-item-totalCarrito-table">
					<div className="grid-item-title">
						<Typography className="title">Carrito de compras</Typography>
						<hr className="underline" />
					</div>
				</Grid>
				<Grid item className="grid-item-btn-table">
					<div className="grid-item-title">
						<Typography className="title">Carrito de compras</Typography>
						<hr className="underline" />
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CarritoCompras;
