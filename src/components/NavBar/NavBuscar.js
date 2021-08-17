import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory } from "react-router-dom";

function NavBuscar() {
  const history = useHistory();
  const [opcion, setOpcion] = useState([]);
  const [search, setSearch] = useState([]);
  const [sugerencia, setSugerencia] = useState("");
  const [sugeTxt, setSugeTxt] = useState("");
  const [respuesTxt, setRespuesTxt] = useState(true);
  const losclick = useRef(null);

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/productos`);
        setOpcion(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
  }, []);

  const handleChange = async (e) => {
    let value = e.target.value;
    let busca = [];
    if (value.length > 2) {
      busca = await opcion.sort().filter((item) => {
        if (item.descrip_producto.toLowerCase().includes(value.toLowerCase())) {
          setRespuesTxt(busca.length !== 0 ? true : false);
          return item;
        }
      });
    }
    setSearch(busca);
    //console.log(sugerencia);
    setSugerencia(value);
    setSugeTxt(value);
    //setDisplay(!display);
  };

  const SugerenciText = (text) => {
    setSugeTxt(text);
    setSearch([]);
    setRespuesTxt(true);
    history.push(`/Busqueda/${text}`);
  };

  useEffect(() => {
    window.addEventListener("mousedown", hacerclickfuera);
    return () => {
      window.removeEventListener("mousedown", hacerclickfuera);
    };
  }, []);
  const hacerclickfuera = (e) => {
    if (losclick.current && !losclick.current.contains(e.target)) {
      setSearch([]);
      setRespuesTxt(true);
    }
  };

  const getBusqueda = () => {
    if (search.length === 0 && sugerencia !== "" && !respuesTxt) {
      return;
    }
    if (search.length) {
      return (
        <ul>
          {search.map((item) => {
            return (
              <div
                Key={item._id}
                tabIndex="0"
                className="opctionBusq"
                onClick={() => SugerenciText(item.descrip_producto)}
              >
                <li>{item.descrip_producto}</li>
              </div>
            );
          })}
        </ul>
      );
    }
  };
  return (
    <div className="NavBuscador" ref={losclick}>
      <FontAwesomeIcon icon={faSearch} className="iconBuscar" />
      <input
        type="text"
        placeholder="Buscar..."
        className="buscador"
        name="buscador"
        value={sugeTxt}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setSearch([]);
            setRespuesTxt(true);
            let value = e.target.value;
            history.push(`/Busqueda/${value}`);
          }
        }}
      />
      {getBusqueda()}
    </div>
  );
}

export default NavBuscar;
