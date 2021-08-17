//OBTENER LOS PRODUCTOS DE LA DB Y PRESENTARLOS EN TARJETA SEGUN LA CATEGORIA
import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

function CardProducts({ id, filtro }) {
  const [documentos, setDocumentos] = useState([]);

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
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {console.log(filtro.marca + " " + filtro.modelo)}
      {documentos
        .filter((card) => {
          if (filtro.modelo === "" && filtro.marca === "") {
            return card;
          } else if (
            card.modelo_auto === filtro.modelo &&
            filtro.marca === ""
          ) {
            return card;
          } else if (card.marca_auto === filtro.marca && filtro.modelo === "") {
            return card;
          } else if (
            card.modelo_auto === filtro.modelo &&
            card.marca_auto === filtro.marca
          ) {
            return card;
          }
        })
        .map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card._id}>
            <Link to={`/Producto/${card._id}`} className="LinkCardProducts">
              {/*redirecciona al producto, enviando el id*/}
              <Card className="CardProducts">
                <CardMedia image={card.imgurl} className="CardMedia" />
                <CardContent>
                  <h1>{card.nom_producto}</h1>
                  <p>{card.descrip_producto}</p>
                  <span>$ {card.precio_producto}</span>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
    </>
  );
}

export default CardProducts;
