const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const zooAnimals = species.map((specie) => specie.name);

function animalsByDay(day) {
  return species.filter((animal) => animal.availability.includes(day)).map((ani) => ani.name);
}

function animalDay(daySchedule) {
  if (daySchedule === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const scheduleByDay = {};
  scheduleByDay[daySchedule] = {
    officeHour: `Open from ${hours[daySchedule].open}am until ${hours[daySchedule].close}pm`,
    exhibition: animalsByDay(daySchedule),
  };
  return scheduleByDay;
}

function fullAnimalsSchedule() {
  const scheduleByDay = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

  days.forEach((day) => {
    scheduleByDay[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animalsByDay(day),
    };
  });
  return scheduleByDay;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') return animalDay(scheduleTarget);
  if (days.includes(scheduleTarget)) return animalDay(scheduleTarget);
  if (zooAnimals.includes(scheduleTarget)) {
    const zooAni = species.find((ani) => ani.name === scheduleTarget);
    return zooAni.availability;
  }
  return fullAnimalsSchedule();
}

module.exports = getSchedule;
