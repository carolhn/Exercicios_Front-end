const fetch = require('node-fetch'); // estou chamando o pacote node que eu instalei (npm i node-fetch@^2)

const getRandomAdvice = () => { // criei uma função e criei uma consta para armazenar a URL
    const url = 'https://api.adviceslip.com/advice'
    const request = fetch(url); // vai chamar o site
    console.log(request);

};
getRandomAdvice();  // chamei minha função
// Promise { <pending> } / me retornou uma promessa. Quando eu chamo uma requisição pelo fetch (assincrono) ele vai me prometer retornar um valor
// pode estar pendente, finalizada ou falahado.

// com o método done, (quando terminar faz isso) ele da conrinuidade no codigo para nao esperarmos sua execução demorar.
// precisamos colocar onde ele retorna a nossa informação.

// const request = fetch(url).then(); // quando terminar a done chama uma callback

const getRandomAdvicess = () => { // criei uma função e criei uma consta para armazenar a URL
    const url = 'https://api.adviceslip.com/advice'

    const request = fetch(url)
    .then((response) => response.json())
   // .then((object) => console.log(object.slip.advice));
   .then((object) => {
    const {slip} = object;
   const { id, advice } = slip;
    console.log(request);
    console.log(id, advice); // 30 When in doubt, just take the next small step.

});
getRandomAdvicess();
}

// vou extrair um JSON (.json) da resposta / console.log(response.json()));  porem vai me deixar esperando
// .then((response) => response.json()); // meu *request* tem um fetch URL, que quando recebe (response) ele retorna (resposnse.json) para o *request*
// quando extrair o json ele retorna um conselho da URL.
// console.log(object.slip));  ---->  { slip: { id: 168, advice: 'Do a bit more for your friends.' } }
// console.log(object.slip.advice));   ---> You will always regret the round of JÃ¤germeister.

//___________________________________________________________________________________________________________
// COMO TRATAR UM ERRO DE QUEBRA O LINK, QUANDO FICAMOS SEM ACESSO.

const getRandomAdviceL = () => { // criei uma função e criei uma consta para armazenar a URL
    const url = 'https://pi.adviceslip.com/advice'

    const request = fetch(url)
    .then((response) => response.json())
   .then(( {slip: {id, advice } }) => console.log(advice))
   .catch((error) => console.log('ops algo deu errado!', error.errno)); // ops algo deu errado! ENOTFOUND
};

getRandomAdviceL();

//   type: 'system',
//  errno: 'ENOTFOUND',
//  code: 'ENOTFOUND'