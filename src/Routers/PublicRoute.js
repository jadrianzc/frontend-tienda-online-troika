import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function PublicRoute({ component: Component, render: Render, ...rest }) {
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
				if (Render) return <Render {...props} />;
				if (Component) return <Component {...props} />;
			}}
		/>
	);
}
