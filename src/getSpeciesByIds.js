const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animal = [];
  const sera = [...ids];
  if (ids === undefined) return animal;
  for (let i = 0; i < sera.length; i += 1) {
    animal.push(species.find((teste) => teste.id === sera[i]));
  }
  return animal;
}

module.exports = getSpeciesByIds;
