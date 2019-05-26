import React, { Component } from 'react';
import '../App.css';

import { Card, ListGroupItem } from 'react-bootstrap';

class Capturas extends Component{
    render(){
        return(

            <div className="container spacing1">
                <Card>
                  <Card.Img className="img-size" variant="top" src="http://www.kosher.com.mx/establecimientos/_imagen_13.jpg" />
                  <Card.Body>
                  <ListGroupItem>
                        Nombre del restaurante
                    </ListGroupItem>
                    <ListGroupItem>
                        Direccion
                    </ListGroupItem>
                    <ListGroupItem>
                      Certificado
                    </ListGroupItem>
                    <ListGroupItem>
                      Descripcion
                    </ListGroupItem>
                    <ListGroupItem>
                      Logo
                    </ListGroupItem>
                    <ListGroupItem>
                      Precio
                    </ListGroupItem>
                  </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Capturas;