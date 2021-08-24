import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import axios from "axios";

function TablaUsuarios(stado) {
  console.log("se ejec");
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertEdit, setOpenAlertEdit] = useState(false);

  const [documentos, setDocumentos] = useState([]);
  const [tablaUser, setTablaUser] = useState([]);

  const [iduser, setIduser] = useState("");

  const [contUser, setContUser] = useState({
    nomb_usuario: "",
    apell_usuario: "",
    ced_usuario: "",
    email_usuario: "",
    contraseña_usuario: "",
  });

  const [estado, setEtado] = useState(stado);

  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/usuarios`);
        setDocumentos(res.data);
        setTablaUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
  }, [stado, estado]);

  /** */
  const handleChangeBusqueda = (e) => {
    setBuscar(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmitBusqueda = () => {
    // e.preventDefault();
    FiltrarUsuarios(buscar);
  };

  const FiltrarUsuarios = (termino) => {
    let resbusqueda = tablaUser.filter((doc) => {
      if (doc.ced_usuario.toLowerCase().includes(termino.toLowerCase())) {
        return doc;
      }
    });
    setDocumentos(resbusqueda);
  };
  /*** */

  /** */

  const EliminaUsuario = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/usuarios/${iduser}`);
      setEtado(!estado);
      setOpenModal(false);
      setOpenAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  const IdElimina = (doc) => {
    setOpenModal(true);
    setIduser(doc);
  };
  /** */

  /** */
  const handlechangeUser = (e) => {
    setContUser({
      ...contUser,
      [e.target.name]: e.target.value,
    });
    //console.log(contUser);
  };
  const IdEdit = async (doc) => {
    setOpenModalEdit(true);
    // setIduser(doc);
    setContUser(doc);
  };

  const AcrualizaUser = async () => {
    try {
      await axios.put(
        `http://localhost:4000/api/v1/usuarios/${contUser._id}`,
        contUser
      );
      setEtado(!estado);
      setOpenModalEdit(false);
      setOpenAlertEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  /** */

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
    setOpenAlertEdit(false);
  };

  const bodyElimi = (
    <div className="ModalRegistro">
      <h2 id="simple-modal-title">Eliminar Usuario</h2>
      <p id="simple-modal-description">¿Esta seguro de eliminar el usuario?</p>
      <input
        type="button"
        className="btnPwd btnPwdAcep"
        value="Continuar"
        onClick={EliminaUsuario}
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

  const bodyEdit = (
    <div className="ModalRegistro">
      <Grid item className="grid-item-user-data">
        <Grid container className="grid-container-user-data user-edit">
          <h2 id="simple-modal-title">Usuario</h2>
          <Grid item className="grid-item-info">
            <label>Nombres</label>
            <input
              type="text"
              name="nomb_usuario"
              value={contUser.nomb_usuario}
              required
              onChange={handlechangeUser}
            />
          </Grid>
          <Grid item className="grid-item-info">
            <label>Apellidos</label>
            <input
              type="text"
              name="apell_usuario"
              value={contUser.apell_usuario}
              required
              onChange={handlechangeUser}
            />
          </Grid>
          <Grid item className="grid-item-info">
            <label>Cédula/RUC</label>
            <input
              type="text"
              name="ced_usuario"
              value={contUser.ced_usuario}
              required
              onChange={handlechangeUser}
            />
          </Grid>
          <Grid item className="grid-item-info">
            <label>E-mail*</label>
            <input
              type="text"
              name="email_usuario"
              value={contUser.email_usuario}
              required
              onChange={handlechangeUser}
            />
          </Grid>
          <Grid item className="grid-item-info">
            <label>Contraseña </label>
            <input
              type="password"
              name="contraseña_usuario"
              value={contUser.contraseña_usuario}
              required
              onChange={handlechangeUser}
            />
          </Grid>
        </Grid>
      </Grid>

      <input
        type="button"
        className="btnPwd btnPwdAcep"
        value="Actualizar"
        onClick={AcrualizaUser}
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

  return (
    <div style={{ height: 300, width: "100%" }}>
      <Grid
        container
        className="grid-container-user-buscar"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item className="grid-item-user-label">
          <label>ID:</label>
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
      <TableContainer style={{ maxHeight: 300, width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Contraseña</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentos
              .filter((doc) => {
                if (doc.rol_usuario === "admin") return doc;
              })
              .map((doc) => (
                <TableRow key={doc._id}>
                  <TableCell>{doc.ced_usuario}</TableCell>
                  <TableCell>{doc.nomb_usuario}</TableCell>
                  <TableCell>{doc.apell_usuario}</TableCell>
                  <TableCell>{doc.email_usuario}</TableCell>
                  <TableCell>**********</TableCell>
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
          El usuario se eliminó correctamente.
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
          El usuario se actualizó correctamente.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TablaUsuarios;
