import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'


class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-bottom clr">
            <Link className="navbar-brand " to="#">Navbar</Link>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <NavLink className="nav-link spacing" to="/">Home</NavLink>
                </li>
                <li className="nav-item spacing">
                <NavLink className="nav-link" to="./sign-in"> Iniciar sesion </NavLink>
                </li>
                <li className="nav-item spacing">
                <NavLink className="nav-link" to="#"> Mas info </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Header;