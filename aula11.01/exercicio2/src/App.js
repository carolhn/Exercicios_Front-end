    // src/App.js
    import React from 'react';

    class App extends React.Component {
      constructor() {
        super(); //  // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this); //  // A função abaixo vincula "manualmente" o `this` à nossa função
        this.handleButtonThree = this.handleButtonThree.bind(this);
        // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
      }

      handleButtonOne() {
        console.log('"this" do botão 1 :', this);
      }

      handleButtonTwo() {
        console.log('"this" do botão 2 :', this);
      }

      handleButtonThree() {
        console.log('"this" do botão 3 :', this);
      }
      render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1</button>
            <button onClick={ this.handleButtonTwo }>Botão 2</button>
            <button onClick={ this.handleButtonThree }>Botão 3</button>
          </div>
        );
      }
    }

    export default App;
//THIS
// this é um objeto que o REACT cria e entrega pra gente.
// No caso o React só vai reconhecer uma função DENTRO da minha classe se eu chamar ela com o “this”. 
// Se não, ele entende que essa função pode estar em qualquer lugar.

// função contrutor(){}
// o React antes de iniciar o render, ele inicia a função constructor()
// podemos redeclarar ela. e colocar um comportamento.
//**porem para eu lidar a minha função contrutor com o REACT eu preciso declara o super() **/
// para que toda a logica interna do react execute essa funcao, sobrescrevendo contrutor
// abaixo do super() eu coloco a logica que eu quiser 
// QUANDO VOU USAR? QUANDO EU PRECISO QUE MINHA FUNÇÃO RECEBA THIS (SEM DAR UNDEFINED)

// BIND
// Ao definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...}, você não precisará fazer o bind. Então não precisaremos do construtor nesse caso. Veja como o exemplo acima seria feito com arrow function:
