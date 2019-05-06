import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Link } from "react-router-dom";


class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark spacing">
            <Link className="navbar-brand " to="#">Navbar</Link>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Link</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#">Disabled</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Header;