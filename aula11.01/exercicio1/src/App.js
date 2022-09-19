import './App.css';
import React from 'react';

function handleButtonOne() {
  console.log('Clicou no botão 1!');
}


function handleButtonTwo() {
  console.log('Clicou no botão 2!');
}

function handleButtonThree() {
  console.log('Clicou no botão 3!');
}

class App extends React.Component {
  render() {
    return ( 
    <div>
      <button onClick={ handleButtonOne }>Botão 1</button>
      <button onClick={ handleButtonTwo }>Botão 2</button>
      <button onClick={ handleButtonThree }>Botão 3</button>
    </div>
    );
  }
}

export default App;
// FORMA ERRADA/ POIS NO REACT AS FUNÇÕES QUE FAZEM SENTIDO ESTÃO DENTRO DA MESMA CLASSE;

// 1) Crie uma aplicação React com npx create-react-app fancy-buttons.
// Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento 
// que imprime um texto qualquer via console.log(). Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!

// 2) Faça com que sua aplicação exiba três botões lado a lado com textos diferentes.
// Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().
