import React, { Component } from 'react';
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';



class Zona extends Component{
    render(){
        return(
            <DropdownButton variant="info" id="dropdown-basic-button" title="Zona">
              <Dropdown.Item>Polanco</Dropdown.Item>
              <Dropdown.Item>Interlomas</Dropdown.Item>
              <Dropdown.Item>Teca</Dropdown.Item>
              <Dropdown.Item>Bosques</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default Zona;