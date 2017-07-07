function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) {

  return startingPopulation * Math.pow((1 + birthRate),numberOfWeeks);

}

module.exports = cherokeeHare;
