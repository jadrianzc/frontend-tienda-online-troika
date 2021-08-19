import React, { useEffect, useState } from "react";
import { Grid, Modal, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import axios from "axios";

function TablaCategorias(stado) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertEdit, setOpenAlertEdit] = useState(false);

  const [documentos, setDocumentos] = useState([]);
  const [tablaCategori, setTablaCategori] = useState([]);

  const [idcategori, setIdcategori] = useState("");

  const [contCategori, setContCategori] = useState({
    nombre_categoria: "",
    sub_categoria: "",
  });

  const [estado, setEtado] = useState(stado);

  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/categorias`);
        setDocumentos(res.data);
        setTablaCategori(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
  }, [stado, estado]);

  /**Busqueda */
  const handleChangeBusqueda = (e) => {
    setBuscar(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmitBusqueda = () => {
    FiltrarUsuarios(buscar);
  };

  const FiltrarUsuarios = (termino) => {
    let resbusqueda = tablaCategori.filter((doc) => {
      if (doc.nombre_categoria.toLowerCase().includes(termino.toLowerCase())) {
        return doc;
      }
    });
    setDocumentos(resbusqueda);
  };
  /** */

  /**Eliminar */
  const EliminaCategoria = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/categorias/${idcategori}`
      );
      setEtado(!estado);
      setOpenModal(false);
      setOpenAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  const IdElimina = (doc) => {
    setOpenModal(true);
    setIdcategori(doc);
  };

  const bodyElimi = (
    <div className="ModalRegistro">
      <h2 id="simple-modal-title">Eliminar Categoría</h2>
      <p id="simple-modal-description">
        ¿Esta seguro de eliminar la categoría?
      </p>
      <input
        type="button"
        className="btnPwd btnPwdAcep"
        value="Continuar"
        onClick={EliminaCategoria}
      />
      <input
        type="button"
        className=" btnPwd btnPwdCan"
        value="Cancelar"
        onClick={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
  /** */

  /**Edit */
  const handlechangeCategori = (e) => {
    setContCategori({
      ...contCategori,
      [e.target.name]: e.target.value,
    });
  };

  const AcrualizaCategori = async () => {
    let newData = {
      nombre_categoria: contCategori.nombre_categoria,
      sub_categoria: contCategori.sub_categoria.toString().split(","),
    };

    try {
      await axios.put(
        `http://localhost:4000/api/v1/categorias/${contCategori._id}`,
        newData
      );
      setEtado(!estado);
      setOpenModalEdit(false);
      setOpenAlertEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const IdEdit = async (doc) => {
    setOpenModalEdit(true);
    // setIduser(doc);
    setContCategori(doc);
  };

  const bodyEdit = (
    <div className="ModalRegistro">
      <Grid item className="grid-item-user-data">
        <Grid container className="grid-container-user-data user-edit">
          <h2 id="simple-modal-title">Categoría</h2>
          <Grid item className="grid-item-info">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre_categoria"
              value={contCategori.nombre_categoria}
              required
              onChange={handlechangeCategori}
            />
          </Grid>
          <Grid item className="grid-item-info">
            <label>Apellidos</label>
            <input
              type="text"
              name="sub_categoria"
              value={contCategori.sub_categoria}
              required
              onChange={handlechangeCategori}
            />
          </Grid>
        </Grid>
      </Grid>

      <input
        type="button"
        className="btnPwd btnPwdAcep"
        value="Actualizar"
        onClick={AcrualizaCategori}
      />
      <input
        type="button"
        className=" btnPwd btnPwdCan"
        value="Cancelar"
        onClick={() => {
          setOpenModalEdit(false);
        }}
      />
    </div>
  );
  /** */

  /** */
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
    setOpenAlertEdit(false);
  };
  /** */
  return (
    <div style={{ height: 300, width: "100%" }}>
      <Grid
        container
        className="grid-container-user-buscar"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item className="grid-item-user-label">
          <label>Nombre:</label>
        </Grid>
        <Grid item className="grid-item-user-input">
          <input
            type="text"
            value={buscar}
            onChange={handleChangeBusqueda}
          ></input>
        </Grid>
        <Grid
          item
          className="grid-container-user-btn"
          justifyContent="flex-end"
          alignItems="center"
        >
          <button onClick={handleSubmitBusqueda}>Buscar</button>
          <button
            onClick={() => {
              setEtado(!estado);
              setBuscar("");
            }}
          >
            Limpiar
          </button>
        </Grid>
      </Grid>
      <TableContainer style={{ maxHeight: 250, width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>Nombre categoría</TableCell>
              <TableCell>Sub categorías</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentos.map((doc) => (
              <TableRow key={doc._id}>
                <TableCell>{doc.nombre_categoria}</TableCell>
                <TableCell>{doc.sub_categoria.toString()}</TableCell>
                <TableCell>
                  <button onClick={() => IdEdit(doc)}>Edit</button>
                  <button onClick={() => IdElimina(doc._id)}>Del</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Modal elimina */}
      <Modal
        open={openModal}
        //onClose={handleClose}
        className="ModalPadreRegi"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyElimi}
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose={handleCloseAlert} severity="success">
          La categoría se eliminó correctamente.
        </Alert>
      </Snackbar>

      {/* Modal Edit */}
      <Modal
        open={openModalEdit}
        //onClose={handleClose}
        className="ModalPadreRegi"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyEdit}
      </Modal>
      <Snackbar
        open={openAlertEdit}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose={handleCloseAlert} severity="success">
          La categoría se actualizó correctamente.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TablaCategorias;
