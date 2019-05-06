import React, { Component } from 'react';
import '../App.css';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';



class Sellos extends Component{
    render(){
        return(
            <DropdownButton className="top" variant="info" id="dropdown-basic-button" title="Certificacion">
              <Dropdown.Item><Image className="thumbnail-image" src="http://envasescipynsa.com/wp-content/uploads/2017/03/Certificado.png" /></Dropdown.Item>
              <Dropdown.Item><Image className="thumbnail-image" src="http://www.moliendas.com.mx/images/kosher_pareve.png" /></Dropdown.Item>
              <Dropdown.Item><Image className="thumbnail-image" src="https://1kosher.com/wp-content/uploads/2016/03/ONE-KOSHER-MEDIUM.png" /></Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default Sellos;