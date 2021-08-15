import React, { useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import axios from 'axios';

const BotonesAddSub = ({ cantidad, document, idUserSession }) => {
	const { counter, increment, decrement } = useCounter(cantidad);

	useEffect(() => {
		const UpdateData = async () => {
			const newData = { ...document, cantidad_producto: counter };
			try {
				const res = await axios.put(`http://localhost:4000/api/v1/usuarios/${idUserSession}/carrito-compra`, newData);
				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		UpdateData();
		window.scrollTo(0, 0);
	}, [counter]);

	console.log(counter);

	return (
		<div className="btn-cantidad">
			<button
				onClick={() => {
					decrement(2);
				}}
			>
				-
			</button>
			<button>{counter}</button>
			<button
				onClick={() => {
					increment(2);
				}}
			>
				+
			</button>
		</div>
	);
};

export default BotonesAddSub;
