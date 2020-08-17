const reachDestination = (distance, speed) => {
  const time = distance / speed;
  const result = Math.ceil(time * 2) / 2;
  return "I should be there in " + result + " hours";
};

module.exports = reachDestination;
