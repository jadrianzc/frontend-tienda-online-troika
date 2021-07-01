import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Inicio} />
      </Switch>
      {/* <Footer />  */}
    </Router>
  );
}

export default App;
