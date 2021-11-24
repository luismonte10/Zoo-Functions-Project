const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let funcionario = {};
  for (let i = 0; i < employees.length; i += 1) {
    if (employees[i].firstName === employeeName) {
      funcionario = employees.filter((teste) => teste.firstName === employeeName);
      return funcionario[0];
    }
    if (employees[i].lastName === employeeName) {
      funcionario = employees.filter((teste) => teste.lastName === employeeName);
      return funcionario[0];
    }
  }
  return funcionario;
}

module.exports = getEmployeeByName;
