import React, { useState, useEffect } from "react";
import "./Categorias.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavCatregorias() {
  const [categorias, setCategorias] = useState([]); //guardar las categorias obtenidas de la DB

  useEffect(() => {
    const obtenerCate = async () => {
      //OBTENER CATEGORIAS DE LA ddb
      await axios
        .get(`http://localhost:4000/api/v1/categorias`)
        .then((res) => {
          setCategorias(res.data);
          console.log(res.data);
        })
        .catch(console.log("error"));
    };
    obtenerCate();
  }, []);

  return (
    <div className="ContCategoria">
      <div className="CategoriaStatico">
        <h1>Categorias</h1>
        <ul>
          {categorias.map((item) => (
            <li key={item._id}>
              <NavLink
                exact
                to={`/Categorías/${item.nombre_categoria}`}
                className="Categoria-links"
                activeClassName="CategoriaLink-Active"
              >
                {item.nombre_categoria}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavCatregorias;
