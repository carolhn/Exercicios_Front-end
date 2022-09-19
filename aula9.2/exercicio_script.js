// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
   const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();

//Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers

// O segundo parâmetro myObject define o tipo de request: method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' }, como visto nas requisições via curl.

// A função fetch é uma Promise. assíncrono e, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando
// as cláusulas .then(em caso de sucesso) e .catch(em caso de falha). A requisição fetch retorna um objeto Response. 
// Utilizando .then, verifique a estrutura da resposta usando um console.log na response retornada pelo fetch.

// COMO MOSTTRAR O TEXTO PIADA?
// Para isso, usamos o método .json() na resposta da API. Esse método converte o conteúdo do body da Response e 
// retorna uma outra Promise, que, quando bem-sucedida, retorna um JSON contendo as informações da piada.
