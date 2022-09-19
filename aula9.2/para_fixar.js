// Responda às perguntas a seguir para ter certeza de que você entendeu os textos.Discuta a resposta com o restante 
// da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos!

// 1) O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
//r: um codigo assincrono é quando ele demora para ser executado. Já o sincrono é executado imediatamente. 

//2) Quando você tem que enfileirar várias callbacks, que problema surge?
// r: pode acontecer erro na execussão do codigo, pois as sequencias importam.

// 3) Por que as Promises são uma forma de resolver esse problema?
//r: elas colocam em ordem a execussão da função, nao deixando o codigo quebrar.

// 4) Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se
// conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
//r: assincrona, as Promisses tem o objetivo de facilitar o controle do fluxo assincrono

//5) Dada a resposta anterior, o que é fetch e para que ele serve?
//r: ela é responsavel por chamar a URL das APIS.