const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours");
    expect(reachDestination(28, 10)).toEqual("I should be there in 3 hours");
    expect(reachDestination(10, 10)).toEqual("I should be there in 1 hours");
    expect(reachDestination(50, 60)).toEqual("I should be there in 1 hours");
  });
});
