import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function PrivateRoute({ hasRole: role, ...rest }) {
  const cookies = new Cookies();
  const user = cookies.get("coki");

  if (role && user?.rol_usuario !== role) return <Redirect to="/" />;
  if (!user) return <Redirect to="/" />;
  return <Route {...rest} />;
}
