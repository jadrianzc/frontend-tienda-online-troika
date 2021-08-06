//OBTENER LOS PRODUCTOS DE LA DB Y PRESENTARLOS EN TARJETA SEGUN LA CATEGORIA
import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import axios from "axios";

function CardProducts({ id }) {
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
      {documentos.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card._id}>
          <Card className="CardProducts">
            <CardMedia image={card.imgurl[0]} className="CardMedia" />
            <CardContent>
              <h1>{card.nom_producto}</h1>
              <p>{card.descrip_producto}</p>
              <span>$ {card.precio_producto}</span>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default CardProducts;
