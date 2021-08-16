import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Inicio from "../components/Inicio/Inicio";
import Agencias from "../components/Agencias/Agencias";
import QuienesSomos from "../components/QuienesSomos/QuienesSomos";
import Login from "../components/Login/Login";
import Registro from "../components/Registro/Registro";
import Producto from "../components/Categorias/Producto/Producto";
import Categorias from "../components/Categorias/Catregorias";
import Busqueda from "../components/Busqueda/Busqueda";
import PerfilUsuario from "../components/PerfilUsuario/PerfilUsuario";
import Administrador from "../components/Administrador/Administrador";
import Usuario from "../components/Administrador/Usuario/Usuario";
import InformacionPago from "../components/Pago/Informacion/InformacionPago";
import CarritoCompras from "../components/CarritoCompras/CarritoCompras";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Quienes-somos" exact component={QuienesSomos} />
        <Route path="/Agencias" exact component={Agencias} />
        <PublicRoute path="/Login" exact component={Login} />
        <PublicRoute path="/Registro" exact component={Registro} />\
        <Route path="/Producto/:id" exact component={Producto} />
        <Route path="/Categorías/:id" exact component={Categorias} />
        <Route path="/Busqueda/:nombre" exact component={Busqueda} />
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
        <PrivateRoute
          path="/carrito-compras"
          exact
          component={CarritoCompras}
        />
        <PrivateRoute
          path="/carrito-compras/info-pago"
          exact
          component={InformacionPago}
        />
      </Switch>
      {/* <Footer />  */}
    </Router>
  );
}
