import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FiltraProducts({ id, onChange, filtro, handleChange, Limpiar, marcas }) {
	const [documentos, setDocumentos] = useState([]);
	const [modelos, setModelos] = useState([]);
	const newMarcas = [];
	const newModelos = [];
	const myObjMarca = {};
	const myObjModelo = {};
	useEffect(() => {
		const LoadData = async () => {
			try {
				const res = await axios.get(`https://server-tienda-troika.herokuapp.com/api/v1/FiltraProductCatego/${id}`);
				setDocumentos(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadData();
	}, [id]);

	useEffect(() => {
		const LoadDataModelos = async () => {
			try {
				const res = await axios.get(
					`https://server-tienda-troika.herokuapp.com/api/v1/filtramodeloauto/${marcas.marca}`
				);
				setModelos(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		LoadDataModelos();
	}, [marcas]);

	return (
		<>
			{documentos.map((doc) => {
				if (!(doc.marca_auto in myObjMarca)) {
					// si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
					myObjMarca[doc.marca_auto] = true;
					if (doc.marca_auto) {
						newMarcas.push(doc.marca_auto);
					}
				}
			})}
			{modelos.map((doc) => {
				if (!(doc.modelo_auto in myObjModelo)) {
					// si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
					myObjModelo[doc.modelo_auto] = true;
					if (doc.modelo_auto) {
						newModelos.push(doc.modelo_auto);
					}
				}
			})}
			<form method="POST" variant="outlined" className="formControlFiltra" onSubmit={onChange}>
				<div className="DivSelectFiltra">
					<label htmlFor="marca">Marca:</label>
					<select name="marca" id="marca" value={filtro.marca} onChange={handleChange}>
						<option aria-label="None" value="" />
						{newMarcas.map((mar) => (
							<option key={mar} value={mar}>
								{mar}
							</option>
						))}
					</select>
					<label htmlFor="modelo">Modelo:</label>
					<select name="modelo" id="modelo" value={filtro.modelo} onChange={handleChange}>
						<option aria-label="None" value="" />
						{newModelos.map((mol) => (
							<option key={mol} value={mol}>
								{mol}
							</option>
						))}
					</select>
				</div>
				<div className="DivBtnFiltra">
					<input type="submit" className="btnNav btnNavIni" value="Buscar" />
					<input type="button" className="btnNav btnNavRegi" onClick={Limpiar} value="Eliminar" />
				</div>
			</form>
		</>
	);
}

export default FiltraProducts;
