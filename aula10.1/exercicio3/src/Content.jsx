import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return (
      <ul className="content">      
        {conteudos.map(({ nome, bloco, status }) => (
          <li key={ nome } className="card">
            <p>{`Eu ${status} o conteúdo ${nome} no bloco ${bloco}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Content;
// tambem pode ser feito dessa forma
// return (
//     <div className="content">      
//       {conteudos.map((elem) => (
//         <div key={ elem.conteudo } className="card">
//          <h4>{ `o conteudo é: ${elem.comteudo}`}</h4>
//           <p>{`status: ${elem.status}`}</p>
//           <p>{`bloco: ${elem.bloco}`}</p>
//         </div>