import React from "react";
import "./NavBar.css";

import NavMenu from "./NavMenu";
import NavBuscar from "./NavBuscar";
import NavBotones from "./NavBotones";
import NavCar from "./NavCar";

function NavBar() {
  return (
    <div className="NavBar">
      <div className={"ContNavBar"}>

        <NavMenu />

        <NavBuscar />

        <NavBotones />

        <NavCar />

      </div>
    </div>
  );
}

export default NavBar;
