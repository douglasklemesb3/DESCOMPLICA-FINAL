import React from 'react';

import { BrowserRouter as Router , Route } from 'react-router-dom';

import './App.scss';
import NavBar from './componentes/navBar/NavBar';

import Home from './componentes/home/Home';
import entretenimentos from './componentes/entreterimentos/Cadastro';



import ListaC from './componentes/lista_de_cursos/Lista_C.js'
import Curso from './componentes/cadastro/Cursos';
import Cadastro from './componentes/entreterimentos/Cadastro';
import Lista_E from './componentes/lista_de_entre/Lista_E';
import Sobre from './componentes/Sobre/Sobre';
import FinaC from './componentes/FinalC/FinalC';
import FinalE from './componentes/finalE/FinalE';



const App = () => {
  return (

    <div className="App">
      <Router>

      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/cursos" component={ListaC}/>
      <Route path="/entretenimentos" component={Lista_E}/>
      <Route path="/cadastrocursos" component={Curso}/>
      <Route path="/cadastroentre" component={Cadastro}/>
      <Route path="/finale" component={FinalE} />
      <Route path="/finalc"component={FinaC} />
      <Route path="/sobre" component={Sobre}/>



      </Router>
    </div>

  );
}

export default App;
