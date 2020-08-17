const numberToReversedDigits = (number) => {
  var initialArray = ("" + number).split("");
  var reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(), 10);
  }
  return reversedArray;
};

module.exports = numberToReversedDigits;
