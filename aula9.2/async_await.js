const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke(); // Chuck Norris can write multi-threaded applications with a single thread.

// _____________________________________________________________________________________________________________________________________________

// A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função fetchJoke. Assim, junto com ela vem um bônus, 
// o *await*. O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, 
// faz a função esperar uma resposta para continuar sua execução.

const fetchJokes = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);

  console.log(result);
};

fetchJokes(); // Chuck Norris's first program was kill -9.

// Chuck Norris can write multi-threaded applications with a single thread.

// _______________________________________________________________________________________________________________________________________________
// A segunda é refatorando o .then() e o .catch() usando o try e o catch:

const fetchJoker = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoker();

// Note que, quando você usa o try e o catch, é executado o código inserido no escopo do try,
// e caso alguma parte desse código dê erro, você o trata no escopo do catch(error).