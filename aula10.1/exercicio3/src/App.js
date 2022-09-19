import './App.css';
import React from 'react';
import Header from './Header'; // ESTOU IMPORTANDO MEU ARQUIVO HEDER
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
         <Header />
          <Content />
          <Footer />
      </div>
    )
  }
}

export default App;
