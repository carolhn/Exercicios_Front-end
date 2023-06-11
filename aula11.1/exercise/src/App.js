import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.state = {
      counter: 0,
  }
}
  handleButtonOne() {
    this.setState((estadoAnterior, _props) => ({
      counter: estadoAnterior.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.handleButtonOne }>{counter}</button>
      </div>
    );
  }
}


export default App;