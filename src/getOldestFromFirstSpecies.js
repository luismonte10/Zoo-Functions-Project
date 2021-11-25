const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeById = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((ani) => ani.id === employeeById).residents;
  const animalByAge = animal.sort((a, b) => b.age - a.age);
  return [animalByAge[0].name, animalByAge[0].sex, animalByAge[0].age];
}

getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83');

module.exports = getOldestFromFirstSpecies;
