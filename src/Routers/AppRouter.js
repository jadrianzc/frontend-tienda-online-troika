import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Inicio from "../components/Inicio/Inicio";
import Login from "../components/Login/Login";
import Registro from "../components/Registro/Registro";
import Producto from "../components/Categorias/Producto/Producto";
import Categorias from "../components/Categorias/Catregorias";
import PerfilUsuario from "../components/PerfilUsuario/PerfilUsuario";
import Administrador from "../components/Administrador/Administrador";
import Usuario from "../components/Administrador/Usuario/Usuario";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <PublicRoute path="/Login" exact component={Login} />
        <PublicRoute path="/Registro" exact component={Registro} />\
        <Route path="/Producto/:id" exact component={Producto} />
        <Route path="/Categorías/:id" exact component={Categorias} />
        <PrivateRoute path="/PerfilUsuario" exact component={PerfilUsuario} />
        <PrivateRoute
          hasRole="admin"
          path="/Admin"
          exact
          component={Administrador}
        />
        <PrivateRoute
          hasRole="admin"
          path="/Admin/Usuario"
          exact
          component={Usuario}
        />
      </Switch>
      {/* <Footer />  */}
    </Router>
  );
}