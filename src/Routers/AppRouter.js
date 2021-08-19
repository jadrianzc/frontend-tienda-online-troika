import { BrowserRouter as Router, Switch } from "react-router-dom";

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
import InformacionPago from "../components/Pago/Informacion/InformacionPago";
import Pago from "../components/Pago/Pago/Pago";
import CarritoCompras from "../components/CarritoCompras/CarritoCompras";

import Administrador from "../components/Administrador/Administrador";
import Usuario from "../components/Administrador/Usuario/Usuario";
import AdminCategorias from "../components/Administrador/Categorias/AdminCategorias";

import PrivateRoute from "./PrivateRoute";
import PrivateRouteRender from "./PrivateRouteRender";
import PublicRoute from "./PublicRoute";
import RouteCli from "./RouteCli";
import RouteCliCompo from "./RouteCliCompo";
import { useState } from "react";

export default function AppRouter() {
  const [cantCar, setCantCar] = useState(0);
  const [addCar, setAddCar] = useState(false);

  return (
    <Router>
      <Switch>
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
          hasRole="admin"
          path="/Admin/Categorias"
          exact
          component={AdminCategorias}
        />

        <>
          <NavBar cantCar={cantCar} setCantCar={setCantCar} addCar={addCar} />
          <RouteCli
            path="/"
            exact
            render={() => <Inicio setCantCar={setCantCar} />}
          />
          <RouteCliCompo path="/Quienes-somos" exact component={QuienesSomos} />
          <RouteCliCompo path="/Agencias" exact component={Agencias} />
          <PublicRoute path="/Login" exact component={Login} />
          <PublicRoute path="/Registro" exact component={Registro} />
          <RouteCli
            path="/Producto/:id"
            exact
            render={() => <Producto addCar={addCar} setAddCar={setAddCar} />}
          />
          <RouteCliCompo path="/Categorías/:id" exact component={Categorias} />
          <RouteCliCompo path="/Busqueda/:nombre" exact component={Busqueda} />
          <PrivateRoute path="/PerfilUsuario" exact component={PerfilUsuario} />

          <PrivateRouteRender
            path="/carrito-compras"
            exact
            render={() => (
              <CarritoCompras addCar={addCar} setAddCar={setAddCar} />
            )}
          />
          <PrivateRoute
            path="/carrito-compras/info-pago"
            exact
            component={InformacionPago}
          />
          <PrivateRoute
            path="/carrito-compras/info-pago/pago"
            exact
            component={Pago}
          />
        </>
      </Switch>
      {/* <Footer />  */}
    </Router>
  );
}
