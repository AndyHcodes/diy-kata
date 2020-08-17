const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns yes when passed true and no when passed false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
