import React from "react";
import { Container, Grid } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import LogoTroika from "../../../../assets/images/logo3.png";
import { Link } from "react-router-dom";
import "../Pago.css";

const Pago = () => {
  return (
    <div style={{ paddingTop: "63px" }}>
      <Container className="container-user container-pago">
        <Grid container className="grid-item-pago-img">
          <img src={LogoTroika} alt="Logo-troika" />
        </Grid>
        <Grid
          container
          className="grid-container-user grid-item-pago-info"
          alignItems="flex-start"
        >
          <Grid item className="grid-item-metodoPago grid-item-pago-info-p">
            <FormGroup row className="grid-item-metodoPago-form">
              <p className="grid-item-metodoPago-form-p">
                Información enviada correctamente a su email.
              </p>
            </FormGroup>
          </Grid>
          <Grid item className="grid-item-btn-table grid-item-pago-info-btn">
            <div className="grid-item-admin-btn grid-item-pago-info-btn-content">
              <Link to={`/`}>
                <button>Seguir Comprando</button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Pago;
