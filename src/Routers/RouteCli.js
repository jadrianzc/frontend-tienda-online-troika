import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function RouteCli(rest) {
  const cookies = new Cookies();
  const user = cookies.get("coki");
  //console.log(user?.rol_usuario !== "cliente");

  if (user && user?.rol_usuario !== "cliente") return <Redirect to="/admin" />;
  return <Route {...rest} />;
}
