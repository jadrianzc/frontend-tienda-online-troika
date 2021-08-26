import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BotonesAddSub from './BotonesAddSub/BotonesAddSub';
import Total from './Totales/Total';
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

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const CarritoCompras = ({ addCar, setAddCar, setEstadoProduCar, estadoProduCar }) => {
	const classes = useStyles();
	const [rows, setRows] = useState([]);
	const [btn, setBtn] = useState(false);
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');

	useEffect(() => {
		const LoadData = async (idUserSession) => {
			try {
				const res = await axios.get(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`);
				const dataFilter = res.data.filter((dato) =>
					dato.idUserSession === idUserSession && dato.estado ? dato : null
				);
				setRows(dataFilter);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData(idUserSession);
		// window.scrollTo(0, 0);
	}, [idUserSession, btn, estadoProduCar]);

	//Btn Delete
	const handleBtnDelete = async (idProductoUnique) => {
		await axios
			.delete(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`, {
				data: { idProductoUnique },
			})
			.then((res) => {
				setBtn(!btn);
				setAddCar(!addCar);
			});
		// console.log(res.data);
	};

	const handleCarVacio = () => {
		if (rows.length === 0) {
			return (
				<Grid container className="row-item-producto-vacio" justifyContent="center" alignItems="center">
					<Grid item>
						<Grid container direction="column" alignItems="center">
							<Typography variant="h5">Carrito vacío</Typography>
							<FontAwesomeIcon icon={faExclamationCircle} className="iconCar btn-carVacio" />
						</Grid>
					</Grid>
				</Grid>
			);
		}
	};

	return (
		<Container className="container-user container-carrito">
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
									<StyledTableCell align="center" className="item-table-size">
										Imagen
									</StyledTableCell>
									<StyledTableCell align="center" className="item-table-size">
										Producto
									</StyledTableCell>
									<StyledTableCell align="center" className="item-table-size">
										Precio
									</StyledTableCell>
									<StyledTableCell align="center" className="item-table-size">
										Cantidad
									</StyledTableCell>
									<StyledTableCell align="center" className="item-table-size">
										Total
									</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => {
									return (
										<StyledTableRow key={row._id} className="row-items-producto-car">
											<StyledTableCell
												align="center"
												component="th"
												scope="row"
												className="row-item-producto-btn-delete"
											>
												<FontAwesomeIcon
													icon={faTimesCircle}
													onClick={() => {
														handleBtnDelete(row._id);
													}}
													className="iconCar btn-delete"
												/>
											</StyledTableCell>
											<StyledTableCell align="center" className="row-item-producto-img">
												<img src={row.imgurl} alt="Imagen-Producto"></img>
											</StyledTableCell>
											<StyledTableCell align="center" className="item-table-size row-item-producto-descr">
												{row.descrip_producto}
											</StyledTableCell>
											<StyledTableCell align="center" className="item-table-size row-item-producto-precio">
												$ {row.precio_producto}
											</StyledTableCell>
											<StyledTableCell align="center" className="row-item-producto-btns">
												<BotonesAddSub
													cantidad={row.cantidad_producto}
													document={row}
													idUserSession={idUserSession}
													setBtn={setBtn}
													btn={btn}
													estadoProduCar={estadoProduCar}
												/>
											</StyledTableCell>
											<StyledTableCell align="center" className="item-table-size row-item-producto-total">
												$ {(row.cantidad_producto * row.precio_producto).toFixed(2)}
											</StyledTableCell>
										</StyledTableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>

					{handleCarVacio()}
				</Grid>
				<Grid item className="grid-item-totalCarrito-table">
					<Total rows={rows} idUserSession={idUserSession} />
				</Grid>
				<Grid item className="grid-item-btn-table">
					<div className="grid-item-admin-btn">
						<Link to={`/carrito-compras/info-pago`}>
							<button>Continuar</button>
						</Link>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CarritoCompras;
