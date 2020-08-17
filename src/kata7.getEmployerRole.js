const getEmployerRole = (employeeName, employees) => {
  const foundEmployee = employees.find(function(item) {
    return item.name === employeeName;
  });
  console.log(foundEmployee);
  return foundEmployee.role;
};

module.exports = getEmployerRole;
