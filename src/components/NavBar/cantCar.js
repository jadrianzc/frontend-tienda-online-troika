import axios from 'axios';

const LoadCantCar = async (idUserSession) => {
	let item;
	try {
		const res = await axios.get(
			`https://server-tienda-troika.herokuapp.com/api/v1/usuarios/${idUserSession}/carrito-compra`
		);
		const datos = res.data;
		const dataFilter = datos.filter((dato) => (dato.idUserSession === idUserSession && dato.estado ? dato : null));
		item = dataFilter.length;
		return item;
	} catch (error) {
		console.log(error);
	}
};

export default LoadCantCar;
