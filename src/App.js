import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import SignIn from './routes/sign-in'

function App() {
  return (

    <BrowserRouter>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sign-in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App; 
