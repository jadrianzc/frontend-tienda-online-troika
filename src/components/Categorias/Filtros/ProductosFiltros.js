import React from "react";
import { Grid, Card, CardMedia, CardContent } from "@material-ui/core";

function ProductosFiltros() {
  const products = [
    {
      id: 1,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "jejeje",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 2,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "gggg",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 3,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "fff",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 4,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "jejeje",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 5,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "lllllll",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 6,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "kkkkkk",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 7,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "jejeje",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 8,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "gggg",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 9,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "fff",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 10,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "jejeje",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 11,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "lllllll",
      descri: "jojojo",
      precio: "15.00",
    },
    {
      id: 12,
      img: "https://www.mansuera.com/uploads/subcategorias/4b1f72314a4651edaeb421413fc8d588498f1591.jpeg?v20210614",
      nombre: "kkkkkk",
      descri: "jojojo",
      precio: "15.00",
    },
  ];
  return (
    <>
      {products.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card className="CardProducts">
            <CardMedia image={card.img} className="CardMedia" />
            <CardContent></CardContent>
            <h1>{card.nombre}</h1>
            <p>{card.descri}</p>
            <span>$ {card.precio}</span>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default ProductosFiltros;
