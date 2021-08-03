import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Registro.css";
import InpustsRegistro from "./InputsRegistro";

function registro() {
  return (
    <div className="ContRegistro">
      <Card className="CardRegistro">
        <CardContent>
          <h1>Crear cuenta</h1>
          <InpustsRegistro />
          <span className="infoRegistro">* Campos obligatorios</span>
        </CardContent>
      </Card>
    </div>
  );
}

export default registro;
