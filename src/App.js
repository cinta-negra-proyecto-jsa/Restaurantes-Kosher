import React from 'react';
import './App.css';
import Header from './components/header';
import Sellos from './components/dropdown-sellos';
import Zona from './components/dropdown-zona';
import Categorias from './components/dropdown-categorias';

function App() {
  return (

    <div className="App">
      <Header />

    <div className="row v-align">
      <div className="pr">
      <Sellos/>
      </div>

      <div className="pr">
      <Zona/>
      </div>

      <div className="pr">
      <Categorias/>
      </div>
    </div>
      
    </div>
  );
}

export default App; 
