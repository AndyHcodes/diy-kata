const humanCatDogYears = (number) => {
  let catYears, dogYears;
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (number === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  if (number > 2) {
    catYears = 24 + 4 * (number - 2);
    dogYears = 24 + 5 * (number - 2);
  }
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
