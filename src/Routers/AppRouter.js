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
import HistorialTransacciones from "../components/HistorialTransacciones/HistorialTransacciones";
import InformacionPago from "../components/Pago/Informacion/InformacionPago";
import Pago from "../components/Pago/Pago/Pago";
import PagoFinal from "../components/Pago/Pago/PagoFinal/PagoFinal";
import CarritoCompras from "../components/CarritoCompras/CarritoCompras";

import Administrador from "../components/Administrador/Administrador";
import AdminProductos from "../components/Administrador/Productos/AdminProductos";
import Usuario from "../components/Administrador/Usuario/Usuario";
import AdminCategorias from "../components/Administrador/Categorias/AdminCategorias";
import AdminPedidos from "../components/Administrador/Pedidos/AdminPedidos";

import Error404 from "../components/Error404/Error404";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RouteCli from "./RouteCli";
import RouteCliCompo from "./RouteCliCompo";
import { useState } from "react";

export default function AppRouter() {
  const [cantCar, setCantCar] = useState(0);
  const [addCar, setAddCar] = useState(false);
  const [dataInfo, setDataInfo] = useState({});
  const [menuState, setMenuState] = useState(true);
  const [estadoProduCar, setEstadoProduCar] = useState(false);

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
          path="/Admin/Productos"
          exact
          component={AdminProductos}
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
        <PrivateRoute
          hasRole="admin"
          path="/Admin/Pedidos"
          exact
          component={AdminPedidos}
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
          <Route
            path="/Producto/:id"
            exact
            render={() => (
              <Producto
                addCar={addCar}
                setAddCar={setAddCar}
                setEstadoProduCar={setEstadoProduCar}
              />
            )}
          />
          <RouteCliCompo path="/Categorías/:id" exact component={Categorias} />
          <RouteCliCompo path="/Busqueda/:nombre" exact component={Busqueda} />
          <PrivateRoute path="/PerfilUsuario" exact component={PerfilUsuario} />
          <PrivateRoute
            path="/HistorialTransacciones"
            exact
            component={HistorialTransacciones}
          />

          <Route
            path="/carrito-compras"
            exact
            render={() => (
              <CarritoCompras
                addCar={addCar}
                setAddCar={setAddCar}
                setEstadoProduCar={setEstadoProduCar}
                estadoProduCar={estadoProduCar}
              />
            )}
          />
          <PrivateRoute
            path="/carrito-compras/info-pago"
            exact
            render={() => <InformacionPago setDataInfo={setDataInfo} />}
          />
          <PrivateRoute
            path="/carrito-compras/info-pago/pago"
            exact
            render={() => (
              <Pago
                dataInfo={dataInfo}
                menuState={menuState}
                setAddCar={setAddCar}
                addCar={addCar}
              />
            )}
          />
          <PrivateRoute
            path="/carrito-compras/info-pago/pago/envio"
            exact
            component={PagoFinal}
          />
          <Route path="*" component={Error404} />
        </>
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
