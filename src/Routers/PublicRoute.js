import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function PublicRoute({ component: Component, ...rest }) {
	const cookies = new Cookies();
	const user = cookies.get('coki');
	//  console.log(user.rol_usuario === "admin");
	// console.log(user);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (user && user?.rol_usuario !== 'cliente') return <Redirect to="/admin" />;
				if (user) return <Redirect to="/" />;
				return <Component {...props} />;
			}}
		/>
	);
}
