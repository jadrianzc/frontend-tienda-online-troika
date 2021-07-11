import React from 'react'
import { NavLink } from "react-router-dom"
import "./NavBar.css"
import logo from "../../assets/images/logo.svg"

function NavMenu() {
    return (
        <>
            <NavLink to="/" className="navbar-logo">
                <img src={logo} alt="" />
            </NavLink>

            <ul className="nav-menu gripi">
                <li className="nav-item">
                    <NavLink
                        exact //saber donde estas exactamente
                        to="/" //aqui la ruta 
                        className="nav-links"
                        activeClassName="NavLink-Active"
                    >
                        Inicio
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        exact
                        to="/Categorías"
                        className="nav-links"
                        activeClassName="NavLink-Active"
                    >
                        Categorías
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        exact
                        to="/Agencias"
                        className="nav-links"
                        activeClassName="NavLink-Active"
                    >
                        Agencias
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        exact
                        to="/Quienes-somos"
                        className="nav-links"
                        activeClassName="NavLink-Active"
                    >
                        Quienes somos
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavMenu
