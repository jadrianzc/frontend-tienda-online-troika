import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default function PrivateRoute({
  render: Render,
  hasRole: role,
  ...rest
}) {
  const cookies = new Cookies();
  const user = cookies.get("coki");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (role && user?.rol_usuario !== role) return <Redirect to="/" />;
        //if (role) return <Redirect to="/Admin" />;
        if (!user) return <Redirect to="/" />;
        return <Render {...props} />;
      }}
    />
  );
}
