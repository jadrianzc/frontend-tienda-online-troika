import React from 'react';
import './Inicio.css';
import Cookies from 'universal-cookie';
import NavCatregorias from '../Categorias/NavCategorias';
import Banner from './Banner';
import MasVendidos from './MasVendidos';
import LoadCantCar from '../NavBar/cantCar';
import Footer from '../Footer/Footer';

function Inicio({ setCantCar }) {
	const cookies = new Cookies();
	const idUserSession = cookies.get('id');
	const data = LoadCantCar(idUserSession);

	data.then((res) => setCantCar(res)).catch((e) => console.log(e));

	return (
		<>
			<div className="ContInicio">
				<NavCatregorias />
				<div className="ContProducts">
					<Banner />
					<MasVendidos />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Inicio;
