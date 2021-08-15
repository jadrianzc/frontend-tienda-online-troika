import React, { useEffect } from 'react';
import { useCounter } from '../../../hooks/useCounter';
import axios from 'axios';

const BotonesAddSub = ({ cantidad, document, idUserSession, setBtn, btn }) => {
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
	}, [counter, btn]);

	return (
		<div className="btn-cantidad">
			<button
				onClick={() => {
					decrement(2);
					setBtn(!btn);
				}}
			>
				-
			</button>
			<button>{counter}</button>
			<button
				onClick={() => {
					increment(2);
					setBtn(!btn);
				}}
			>
				+
			</button>
		</div>
	);
};

export default BotonesAddSub;
