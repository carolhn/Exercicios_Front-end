// Para fixar
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };

  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);

//_____________________________________________________________________________________________________________________________________________
// EXPLICAÇÃO DA FUNÇÃO ACIMA.

// Definimos a função userFullName;
// Definimos a função getUser
// Definimos que o parâmetro que a nossa getUser vai receber se chama "param".
// Ao executar a função getUser, passamos a função userFullName como parâmetro.

// Ou seja, o parâmetro "param" de dentro da nossa getUser é igual à função userFullName. Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico,
// ele vai assumir o valor que passarmos no momento em que executarmos a nossa função.
// ________________________________________________________________________________________________________________________________________________

// Adicione uma callback como parâmetro da função user.
// No código abaixo você tem a função user, que define um objeto com os dados de uma pessoa. Complete a função user de forma que ela receba uma
// função callback como parâmetro para realizar as operações abaixo:
// Insira o retorno da função getUser;
// Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
// Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

const userFullNames = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const user = (callback) => {
  const userToReturnn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };
  return callback(userToReturnn);
};

console.log(user(userFullNames)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(user(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// ______________________________________________________________________________________________________________________________________________
// obs: Obs.: Analise o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality).
//  Tem hora que o nome da pessoa é impresso antes e tem hora que a nacionalidade da pessoa é impressa antes!