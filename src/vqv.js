/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  const alberto = {
    name: 'Alberto',
    age: 29,
  };
  const tunico = {
    name: 'Tunico',
    age: 30,
  };
  if (name === undefined || age === undefined) {
    return undefined;
  }
  if (tunico || alberto) {
    return `Oi, meu nome é ${name}!\n`
    + `Tenho ${age} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
  }
};

module.exports = vqv;
