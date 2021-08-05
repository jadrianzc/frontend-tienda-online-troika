import React from "react";
import "./Categorias.css";
import { NavLink } from "react-router-dom";

function Catregorias() {
  return (
    <div className="ContCategoria">
      <div className="CategoriaStatico">
        <h1>Categorias</h1>
        <ul>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Filtros" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Filtros
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Lubricantes" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Lubricantes
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Partes-de-caja-de-cambio" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Partes de caja de cambio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Partes-de-embrague" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Partes de embrague
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Partes-de-freno" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Partes de freno
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Partes-de-motor" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Partes de motor
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Partes-electricas" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Partes electricas
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Ruliman-Cardan" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Ruliman Cardan
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Ruliman-y-retenedor" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Ruliman y retenedor
            </NavLink>
          </li>
          <li>
            <NavLink
              exact //saber donde estas exactamente
              to="/Suspensión" //aqui la ruta
              className="Categoria-links"
              activeClassName="CategoriaLink-Active"
            >
              Suspensión
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Catregorias;
