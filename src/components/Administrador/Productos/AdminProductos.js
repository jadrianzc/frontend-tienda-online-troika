import React, { useState, useEffect } from "react";
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

function AdminProductos() {
  // Cargando

  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [stado, setStado] = useState(false);

  const [categorias, setCategorias] = useState([]);

  const [valorBusqueda, setValorBusqueda] = useState({});

  /*
   * Obtener Categorias
   */
  useEffect(() => {
    const optenerCategori = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/categorias");
        setCategorias(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    optenerCategori();
  }, []);
  /** */

  /*
   *Busqueda
   */

  const handleSubmitBusqueda = (e) => {
    e.preventDefault();
    let codifso = e.target.buscodigo;
    let buscategori = e.target.buscategori;
    setValorBusqueda({
      ...valorBusqueda,
      [codifso.name]: codifso.value,
      [buscategori.name]: buscategori.value,
    });
  };

  /** */

  const AbreElIngreso = async () => {
    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let codigo_producto = e.target.codigo_producto;
    let nom_producto = e.target.nom_producto;
    let descrip_producto = e.target.descrip_producto;
    let categoria_producto = e.target.categoria_producto;
    let precio_producto = e.target.precio_producto;
    let marca_auto = e.target.marca_auto;
    let modelo_auto = e.target.modelo_auto;
    let modelo_producto = e.target.modelo_producto;
    let cantidad_producto = e.target.cantidad_producto;
    let foto = e.target.foto.files;

    const datos = {
      [codigo_producto.name]: codigo_producto.value,
      [nom_producto.name]: nom_producto.value,
      [descrip_producto.name]: descrip_producto.value,
      [categoria_producto.name]: categoria_producto.value,
      [precio_producto.name]: precio_producto.value,
      [marca_auto.name]: marca_auto.value,
      [modelo_auto.name]: modelo_auto.value,
      [modelo_producto.name]: modelo_producto.value,
      [cantidad_producto.name]: cantidad_producto.value,
    };
    const dataimg = new FormData();
    dataimg.append("file", foto[0]);
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
          AgregaProduc(nnewdata, e);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const AgregaProduc = async (nnewdata, e) => {
    try {
      await axios.post("http://localhost:4000/api/v1/productos", nnewdata);
      console.log("enviaso");
      setOpenModal(false);
      e.target.reset();
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
              type="file"
              required
            />
          </Grid>
          <Grid container item xs={9} spacing={3}>
            <Grid item className="grid-item-info" xs={6}>
              <label>Código:</label>
              <input type="text" name="codigo_producto" required />
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Marca de auto:</label>
              <input type="text" name="marca_auto" required />
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Modelo de auto:</label>
              <input type="text" name="modelo_auto" required />
            </Grid>
            <Grid item className="grid-item-info" xs={6}>
              <label>Nombre:</label>
              <input type="text" name="nom_producto" required />
            </Grid>
            <Grid item className="grid-item-info" xs={6}>
              <label>Modelo de producto:</label>
              <input type="text" name="modelo_producto" required />
            </Grid>
            <Grid item className="grid-item-info" xs={6}>
              <label>Categoría:</label>
              <select name="categoria_producto" id="categoria_producto">
                <option aria-label="None" value="" />
                {categorias.map((mar) =>
                  mar.sub_categoria.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))
                )}
              </select>
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Stock:</label>
              <input type="number" name="cantidad_producto" required />
            </Grid>
            <Grid item className="grid-item-info" xs={3}>
              <label>Precio:</label>
              <input
                type="number"
                name="precio_producto"
                placeholder="0.00"
                step="0.01"
                pattern="^\d+(?:\.\d{1,2})?$"
                required
              />
            </Grid>
            <Grid item className="grid-item-info" xs={12}>
              <label>Descripción</label>
              <input type="text" name="descrip_producto" required />
            </Grid>
          </Grid>
        </Grid>

        <input type="submit" className="btnPwd btnPwdAcep" value="Agregar" />
        <input
          type="reset"
          defaultValue="Reset"
          className=" btnPwd btnPwdCan"
          value="Cancelar"
          onClick={() => {
            setOpenModal(false);
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
    <Container className="container container-user container-admin">
      <Grid container>
        <Grid item container className="grid-item-produc-4" xs={12}>
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
            <Grid container alignItems="center">
              <form
                onSubmit={handleSubmitBusqueda}
                style={{ display: "contents" }}
              >
                <label>Código:</label>
                <input type="text" name="buscodigo"></input>

                <label>Categoria:</label>
                <select name="buscategori" id="buscategori">
                  <option aria-label="None" value="" />
                  {categorias.map((mar) =>
                    mar.sub_categoria.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))
                  )}
                </select>

                <Grid item className="grid-container-user-btn">
                  <button type="submit" className="BtnBuscarAdmin">
                    Buscar
                  </button>
                  <button
                    type="reset"
                    defaultValue="Reset"
                    onClick={() => {
                      setStado(!stado);
                      //setBuscar("");
                      setValorBusqueda("");
                    }}
                  >
                    Limpiar
                  </button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="grid-item-produc-6" xs={12}>
          <Grid item className="grid-item-user-tabla">
            <TablaProductos stado={stado} valorBusqueda={valorBusqueda} />
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
