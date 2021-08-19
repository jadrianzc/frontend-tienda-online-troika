import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Modal,
  Snackbar,
} from "@material-ui/core";
import "../Usuario/Usuario.css";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import TablaProductos from "./TablaProductos";
// import TablaCategorias from "./TablaCategorias";

function AdminProductos() {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [stado, setStado] = useState(false);

  const [img, setImg] = useState("");
  const [urlimg, setUrlimg] = useState({ imgurl: "" });

  const [datos, setDatos] = useState({
    codigo_producto: "",
    nom_producto: "",
    descrip_producto: "",
    categoria_producto: "",
    precio_producto: "",
    marca_auto: "",
    modelo_auto: "",
    modelo_producto: "",
    cantidad_producto: "",
  });
  const [categorias, setCategorias] = useState([]);

  const uploadImage = (e) => {
    setImg(e.target.files);
  };

  const AbreElIngreso = async () => {
    setOpenModal(true);
    try {
      const res = await axios.get("http://localhost:4000/api/v1/categorias");
      setCategorias(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlechangeProduc = async (e) => {
    await setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataimg = new FormData();
    dataimg.append("file", img[0]);
    dataimg.append("upload_preset", "jacbgyfs");
    try {
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/troikafoto/image/upload",
          dataimg
        )
        .then((res) => {
          //setUrlimg({ imgurl: res.data.secure_url });
          let imgurl = { imgurl: res.data.secure_url };
          const nnewdata = Object.assign(datos, imgurl);
          AgregaProduc(nnewdata);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const AgregaProduc = async (nnewdata) => {
    try {
      await axios.post("http://localhost:4000/api/v1/productos", nnewdata);
      console.log("enviaso");
      setOpenModal(false);
      setDatos({
        codigo_producto: "",
        nom_producto: "",
        descrip_producto: "",
        categoria_producto: "",
        precio_producto: 0,
        marca_auto: "",
        modelo_auto: "",
        modelo_producto: "",
        cantidad_producto: 0,
      });
      setUrlimg({ imgurl: "" });
      setStado(!stado);
      setOpenAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  const bodyAgregar = (
    <div className="ModalAgregaProduct">
      <h1 className="title-usuario title-Produc">Agregar producto</h1>
      <form method="post" onSubmit={handleSubmit}>
        <Grid container className="grid-container-user-data user-edit">
          <Grid container item xs={3}>
            <input
              accept="image/*"
              name="foto"
              id="contained-button-file"
              multiple
              type="file"
              onChange={uploadImage}
            />
          </Grid>
          <Grid container item xs={9} spacing={3}>
            <Grid item className="grid-item-info" xs={6}>
              <label>Código:</label>
              <input
                type="text"
                name="codigo_producto"
                value={datos.codigo_producto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Marca de auto:</label>
              <input
                type="text"
                name="marca_auto"
                value={datos.marca_auto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Modelo de auto:</label>
              <input
                type="text"
                name="modelo_auto"
                value={datos.modelo_auto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={6}>
              <label>Nombre:</label>
              <input
                type="text"
                name="nom_producto"
                value={datos.nom_producto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={6}>
              <label>Modelo de producto:</label>
              <input
                type="text"
                name="modelo_producto"
                value={datos.modelo_producto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={6}>
              <label>Categoría:</label>
              <select
                name="categoria_producto"
                id="categoria_producto"
                value={datos.categoria_producto}
                onChange={handlechangeProduc}
              >
                <option aria-label="None" value="" />
                {categorias.map((mar) =>
                  mar.sub_categoria.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))
                )}
                {console.log(categorias)}
              </select>
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Stock:</label>
              <input
                type="number"
                name="cantidad_producto"
                value={datos.cantidad_producto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Precio:</label>
              <input
                type="number"
                name="precio_producto"
                value={datos.precio_producto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
            <Grid item className="grid-item-info" xs={12}>
              <label>Descripción</label>
              <input
                type="text"
                name="descrip_producto"
                value={datos.descrip_producto}
                required
                onChange={handlechangeProduc}
              />
            </Grid>
          </Grid>
        </Grid>

        <input
          type="submit"
          className="btnPwd btnPwdAcep"
          value="Agregar"
          //onClick={AcrualizaCategori}
        />
        <input
          type="button"
          className=" btnPwd btnPwdCan"
          value="Cancelar"
          onClick={() => {
            setOpenModal(false);
            setDatos({
              imgurl: "",
              codigo_producto: "",
              nom_producto: "",
              descrip_producto: "",
              categoria_producto: "",
              precio_producto: "",
              marca_auto: "",
              modelo_auto: "",
              modelo_producto: "",
              cantidad_producto: "",
            });
          }}
        />
      </form>
    </div>
  );
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Container className="container container-user">
      <Grid
        container
        justifyContent="space-between"
        className="grid-container-add-user"
      >
        <Grid
          item
          container
          justifyContent="space-between"
          className="grid-item-produc-4"
        >
          <Grid item className="grip-agrega-produc">
            <div className="grid-item-title">
              <Typography className="title-usuario title">
                Agregar producto
              </Typography>
            </div>
            <Grid item className="grid-item-user-data">
              <Grid
                container
                className="grid-container-user-btn"
                alignItems="center"
              >
                <button onClick={AbreElIngreso}>Nuevo</button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className="grip-busca-produc">
            <div className="grid-item-title">
              <Typography className="title-usuario title">
                Búsqueda de producto
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item className="grid-item-produc-6">
          <Grid item className="grid-item-user-buscar">
            <Grid item className="grid-item-user-tabla">
              {openModal ? (
                <h1>modal abierta</h1>
              ) : (
                <TablaProductos stado={stado} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Modal Agregar*/}
      <Modal
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
      </Snackbar>
    </Container>
  );
}

export default AdminProductos;
