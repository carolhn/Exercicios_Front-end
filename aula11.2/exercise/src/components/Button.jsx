import React from 'react';

class Button extends React.Component {
  render() {
    const { handleClick } = this.props;

    return (<button type="button" onClick={handleClick} >Contar clique!</button>);
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numeroDeCliques: 0,
    };
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App