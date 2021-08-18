import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function RouteCli({ render: Render, ...rest }) {
  const cookies = new Cookies();
  const user = cookies.get("coki");
  //console.log(user?.rol_usuario !== "cliente");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && user?.rol_usuario !== "cliente")
          return <Redirect to="/admin" />;
        if (Render) return <Render {...props} />;
        return <Render {...props} />;
      }}
    />
  );
}
