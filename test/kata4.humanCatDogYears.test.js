const { humanCatDogYears } = require("../src/index");

describe("humanCatDogYears", () => {
  test("returns an array of human, cat and dog years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
  });
});
