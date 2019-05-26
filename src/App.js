import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import SignIn from './routes/sign-in';
import SignUp from './routes/sign-up';
import FormularioCaptura from './routes/formulario-captura';

function App() {
  return (

    <BrowserRouter>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/formulario-captura" component={FormularioCaptura} />
      </Switch>
    </BrowserRouter>
  );
}

export default App; 
