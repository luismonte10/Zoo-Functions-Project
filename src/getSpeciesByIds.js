const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animals = [];
  const arrayIds = [...ids];
  if (ids === undefined) return animals;
  for (let i = 0; i < arrayIds.length; i += 1) {
    animals.push(species.find((animal) => animal.id === arrayIds[i]));
  }
  return animals;
}

module.exports = getSpeciesByIds;
