const joinNames = (namesObj) => {
  let joinedNames = "";
  namesObj.forEach(function(item, index) {
    if (index < namesObj.length - 2) {
      joinedNames += item.name + ", ";
    } else if (index < namesObj.length - 1) {
      joinedNames += item.name + " &";
    } else {
      joinedNames += " " + item.name;
    }
  });
  return joinedNames;
};

// for (let i = 0; i < namesObj.length; i += 1)
// const allNames = namesObj[i];
// return allNames;

//let testOne = namesObj[0];
//let testTwo = namesObj[1];
//let testThree = namesObj[2];
//return testOne.name + ", " + testTwo.name + " & " + testThree.name;

module.exports = joinNames;
