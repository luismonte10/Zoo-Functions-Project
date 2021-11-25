const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce((accAnimals, animals) => Object.assign(accAnimals, {
      [animals.name]: animals.residents.length }), {});
  }
  const teste = species.find((ani) => animal.specie === ani.name);
  if (Object.keys(animal).length === 1) return teste.residents.length;
  return teste.residents.filter((tes) => tes.sex === animal.sex).length;
}

module.exports = countAnimals;
