import { useState } from 'react';
import './App.css';
import Condicional from './components/Condicional';
import Frase from './components/Frase';
import List from './components/List';
import OutraLista from './components/OutraLista';
import Pessoa from './components/Pessoa';
import Saudacao from './components/Saudacao';
import SayMyName from './components/SayMyName';
import SeuNome from './components/SeuNome';
import Evento from './Evento.js';
import Form from './Form';

function App () {
  const meusTens = ['React', 'Vue', 'Angular']
  const nome = 'Dani'
  const [SeuName, setSeuName] = useState()
  return (
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName nome='Vitor ' />
      <SayMyName nome={nome} />
      <Pessoa nome='Virtor' idade='37' profissao='programador' foto='https://via.placeholder.com/150' />
      <p>.</p>
      <List />
      <p>.</p>
      <Evento numero="1" />
      <p></p>
      <Form></Form>
      <p></p>
      <h1>Renderizacao Condicional</h1>
      <Condicional></Condicional>
      <p></p>
      <h1>Renderizaçao de Listas</h1>
      <OutraLista Tens={meusTens} />
      <OutraLista Tens='' />
      <p></p>
      <h1>State Lift</h1>
      <SeuNome setSeuName={setSeuName}></SeuNome>
      <p>
        {SeuName}
      </p>
      
      <p>
        <Saudacao SeuName={SeuName}></Saudacao>
      </p>
    </div>
  );
}

export default App;
