import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Modal,
  Snackbar,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import "../Usuario/Usuario.css";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import TablaPedidos from "./TablaPedidos";

function AdminPedidos() {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [stado, setStado] = useState(false);

  const [valorBusqueda, setValorBusqueda] = useState({});
  const [valueRadio, setValueRadio] = useState("pendiente");

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setValueRadio(e.target.value);
  };

  return (
    <Container className="container container-user">
      <Grid container>
        <Grid item container className="grid-item-produc-4" xs={12}>
          <Grid item className="grip-busca-pedido">
            <div className="grid-item-title">
              <Typography className="title-usuario title">
                Búsqueda de pedidos
              </Typography>
            </div>
            <Grid container>
              <Grid item alignItems="center" xs={8}>
                <form
                  //onSubmit={handleSubmitBusqueda}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <label>Código:</label>
                  <input type="text" name="buscodigo"></input>

                  <Grid item className="grid-container-user-btn">
                    <button type="submit">Buscar</button>
                    <button
                      type="reset"
                      defaultValue="Reset"
                      // onClick={() => {
                      //   setStado(!stado);
                      //   //setBuscar("");
                      //   setValorBusqueda("");
                      // }}
                    >
                      Limpiar
                    </button>
                  </Grid>
                </form>
              </Grid>
              <Grid item alignItems="center" xs={4}>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  value={valueRadio}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="pendiente"
                    control={<Radio />}
                    label="Pendiente"
                  />
                  <FormControlLabel
                    value="pagado"
                    control={<Radio />}
                    label="Pagado"
                  />
                  <FormControlLabel
                    value="entregado"
                    control={<Radio />}
                    label="Entregado"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="grid-item-produc-6" xs={12}>
          <Grid item className="grid-item-user-tabla">
            <TablaPedidos
              stado={stado}
              valorBusqueda={valorBusqueda}
              valueRadio={valueRadio}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Modal Agregar*/}
      {/* <Modal
        open={openModal}
        //onClose={handleClose}
        className="ModalPadreRegi"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyAgregar}
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose="" severity="success">
          El producto se agregó correctamente.
        </Alert>
      </Snackbar> */}
    </Container>
  );
}

export default AdminPedidos;
