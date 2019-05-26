import React, { Component } from 'react';
import '../App.css';

import Header from '../components/header';
import Sellos from '../components/dropdown-sellos';
import Zona from '../components/dropdown-zona';
import Categorias from '../components/dropdown-categorias';
import Capturas from '../components/capturas';

class Home extends Component {
    render(){
        return(
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

          <Capturas 
          restaurante="hola como estas"
          />
            
          </div>
        )
    }
}

export default Home; 
