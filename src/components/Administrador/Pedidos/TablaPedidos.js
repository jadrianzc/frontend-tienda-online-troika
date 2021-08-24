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

function TablaPedidos(props) {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const [estado, setEtado] = useState(false);

  const [documentos, setDocumentos] = useState([]);
  const [tablaPedidos, setTablaPedidos] = useState([]);

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/pedidos`);
        setDocumentos(res.data);
        setTablaPedidos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    LoadData();
  }, [props.stado, estado]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <TableContainer style={{ maxHeight: "100%", width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>CI. Cliente</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Productos</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documentos.map((doc) => (
              <TableRow key={doc._id}>
                <TableCell>{doc.ced_usuario}</TableCell>
                <TableCell>{doc.carrito_usuario.length}</TableCell>
                <TableCell>
                  {doc.carrito_usuario.map((prod) =>
                    prod.descrip_producto.toString()
                  )}
                </TableCell>
                <TableCell>{doc.total_carrito}</TableCell>
                <TableCell>{doc.f_creacion_ordenCompra}</TableCell>
                <TableCell>
                  {doc.estado ? (
                    <span style={{ color: "green" }}>Pagado</span>
                  ) : (
                    <span style={{ color: "red" }}>Pendiente</span>
                  )}
                </TableCell>
                <TableCell>
                  <button
                  //onClick={() => AbreElEdit(doc)}
                  >
                    Ver Detalle
                  </button>
                  <button
                  //onClick={() => IdElimina(doc._id)}
                  >
                    Del
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TablaPedidos;
