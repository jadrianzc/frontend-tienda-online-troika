import React, { useState, useEffect } from "react";
import axios from "axios";

function FiltraProducts({ id, onChange, filtro, handleChange, Limpiar }) {
  const [documentos, setDocumentos] = useState([]);
  const newArr = [];
  const myObj = {};
  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/FiltraProductCatego/${id}`
        );
        setDocumentos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
  }, [id]);
  return (
    <>
      <form
        method="POST"
        variant="outlined"
        className="formControl"
        onSubmit={onChange}
      >
        Marca:
        <select name="marca" value={filtro.marca} onChange={handleChange}>
          {documentos.map((jj) => {
            if (!(jj.marca_producto in myObj)) {
              // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
              myObj[jj.marca_producto] = true;
              newArr.push(jj.marca_producto);
            }
          })}
          <option aria-label="None" value="" />
          {newArr.map((mol) => (
            <option value={mol}>{mol}</option>
          ))}
        </select>
        Modelo:
        <select name="modelo" value={filtro.modelo} onChange={handleChange}>
          <option aria-label="None" value="" />
          <option value={"ff"}>RT</option>
          <option value={"ff"}>CT</option>
        </select>
        <input type="submit" value="Enviar" />
        <input type="button" onClick={Limpiar} value="Limpiar" />
      </form>
    </>
  );
}

export default FiltraProducts;
