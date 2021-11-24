const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const quant = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      quant.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      quant.adult += 1;
    } else if (entrant.age >= 50) {
      quant.senior += 1;
    }
  });
  return quant;
}

function calculateEntry(entrants) {
  // seu código aqui
  let soma = 0;
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const quantReturn = countEntrants(entrants);
  soma = (quantReturn.child * prices.child);
  soma += (quantReturn.adult * prices.adult);
  soma += (quantReturn.senior * prices.senior);
  return soma;
}

module.exports = { calculateEntry, countEntrants };
