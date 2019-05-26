import React, { Component } from 'react';
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';



class Sellos extends Component{
    render(){
        return(
            <DropdownButton variant="info" id="dropdown-basic-button" title="Certificacion">
              <Dropdown.Item>KMD</Dropdown.Item>
              <Dropdown.Item>KA</Dropdown.Item>
              <Dropdown.Item>One Kosher</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default Sellos;