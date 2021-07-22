import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Registro from "./components/Registro/Registro"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Registro" exact component={Registro} />
      </Switch>
      {/* <Footer />  */}
    </Router>
  );
}

export default App;
