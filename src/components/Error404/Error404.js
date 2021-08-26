import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import img404 from "../../assets/images/error-404.svg";

function Error404() {
  return (
    <Container maxWidth="sm">
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 63px)",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <img style={{ width: "100%" }} src={img404} alt="" />
          <h1>Ooops, Parece que te has perdido.</h1>
          <h3>
            Vuelve al{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#63A0FF" }}>
              inicio
            </Link>
          </h3>
        </div>
      </div>
    </Container>
  );
}

export default Error404;
