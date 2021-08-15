import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function PublicRoute(rest) {
  const cookies = new Cookies();
  const user = cookies.get("coki");

  if (user) return <Redirect to="/" />;
  return <Route {...rest} />;
}
