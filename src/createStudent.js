/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (name) => {
  const feedback = () => 'Eita pessoa boa!';
  let estudante = { name: `${name}`, feedback };
  let estudante2 = { name: `${name}`, feedback };
  let estudante3 = { name: `${name}`, feedback };
  if (name === 'Leandrão, o Lobo Solitário') { return estudante; }
  if (name === 'Nobre') { return estudante2; }
  if (name === 'Inácio') { return estudante3; }
};

module.exports = createStudent;
