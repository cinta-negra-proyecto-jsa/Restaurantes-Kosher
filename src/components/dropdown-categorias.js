import React, { Component } from 'react';
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';



class Categorias extends Component{
    render(){
        return(
            <DropdownButton variant="info" id="dropdown-basic-button" title="Categorias">
              <Dropdown.Item>Carne</Dropdown.Item>
              <Dropdown.Item>Leche</Dropdown.Item>
              <Dropdown.Item>Carne / leche</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default Categorias;