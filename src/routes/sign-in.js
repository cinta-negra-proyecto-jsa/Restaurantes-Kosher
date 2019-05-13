import React, { Component } from 'react';
import '../App.css';
import {Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Header from '../components/header';

class SignIn extends Component{
    render(){
        return(
          <div className="App">

          <Header />

          <div className="login-form">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                  No compartiremos tu email con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Recuerdame" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Iniciar sesion
              </Button>
            </Form>
            <div className="spacing">
              <Link to="./sign-up">Crear cuenta </Link>
              <span> | </span>
              <Link>Olvide mi contraseña</Link>
            </div>
          </div>

            </div>
        )
    }
}

export default SignIn;