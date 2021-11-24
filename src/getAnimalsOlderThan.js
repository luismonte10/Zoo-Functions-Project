const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  for (let i = 0; i < species.length; i += 1) {
    if (species[i].name === animal) {
      return species[i].residents.every((isOld) => isOld.age > age);
    }
  }
}

module.exports = getAnimalsOlderThan;
