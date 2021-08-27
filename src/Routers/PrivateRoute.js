import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function PrivateRoute({ component: Component, render: Render, hasRole: role, ...rest }) {
	const cookies = new Cookies();
	const user = cookies.get('coki');

	return (
		<Route
			{...rest}
			render={(props) => {
				if (role && user?.rol_usuario !== role) return <Redirect to="/Login" />;
				//if (role) return <Redirect to="/Admin" />;
				if (!user) return <Redirect to="/Login" />;
				if (Render) return <Render {...props} />;
				if (Component) return <Component {...props} />;
			}}
		/>
	);
}
