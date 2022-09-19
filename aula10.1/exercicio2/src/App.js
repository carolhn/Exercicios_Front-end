import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li> // codigo jsx pois esta dentro de {}
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul> // Use a função map para criar cada item da lista no HTML.
    )
  }
}

export default App;
