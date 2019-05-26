import React, { Component } from 'react';
import '../App.css';

import { Form, Col, InputGroup, Button } from 'react-bootstrap';

import Header from '../components/header';


class FormularioCaptura extends Component{
    constructor(...args) {
        super(...args);
    
        this.state = { validated: false };
      }
    
      handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
      }


    render(){
        const { validated } = this.state;
        return(

            <div className="App">

            <Header />

            <div className="f-form">
            <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre del resraurante</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Direccion"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Certificado</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Certificado"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Porfavor, escribe un certificado.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" required />
            <Form.Control.Feedback type="invalid">
              Porfavor, danos una descripcion.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="Precio" required />
            <Form.Control.Feedback type="invalid">
              Porfavor, danos un aproximado del precio de la comida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Logo</Form.Label>
            <Form.Control type="text" placeholder="Logo" required />
            <Form.Control.Feedback type="invalid">
              Porfavor, danos un logo o foto del restaurante.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Todo esta correcto"
            feedback="Debes validar este campo."
          />
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
      </div>
      </div>
        )
    }
}

export default FormularioCaptura;