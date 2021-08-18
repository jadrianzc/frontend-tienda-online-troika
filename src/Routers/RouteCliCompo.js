import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function RouteCliCompo({ component: Component, ...rest }) {
  const cookies = new Cookies();
  const user = cookies.get("coki");
  //console.log(user?.rol_usuario !== "cliente");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && user?.rol_usuario !== "cliente")
          return <Redirect to="/admin" />;
        return <Component {...props} />;
      }}
    />
  );
}
