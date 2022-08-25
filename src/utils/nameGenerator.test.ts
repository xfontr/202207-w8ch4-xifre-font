import {
  composeName,
  nameGenerator,
  randomLetterGenerator,
  randomNumberGenerator,
} from "./nameGenerator";

describe("Given a nameGenerator function", () => {
  describe("When called", () => {
    test("It should return a random string with 2 numbers and 3 letters", () => {
      const result = nameGenerator();

      expect(result).toHaveLength(5);
    });
  });
});

describe("Given a randomLetterGenerator function", () => {
  describe("When called", () => {
    test("It should return a random letter extracted from an array Alphabet", () => {
      const result = randomLetterGenerator();

      expect(result).not.toBeNull();
      expect(Number.isNaN(+result)).toBe(true);
    });
  });
});

describe("Given a randomNumberGenerator function", () => {
  describe("When called", () => {
    test("It should return a random number from 0 to 9", () => {
      const result = randomNumberGenerator();

      expect(Number.isNaN(result)).toBe(false);
      expect(result >= 0).toBe(true);
      expect(result < 10).toBe(true);
    });
  });
});

describe("Given a composeName function", () => {
  describe("When called", () => {
    test("It should return an array with 2 numbers and 3 string characters", () => {
      const result = composeName();

      expect(typeof result[0]).toBe("number");
      expect(typeof result[1]).toBe("number");
      expect(typeof result[2]).toBe("string");
      expect(typeof result[3]).toBe("string");
      expect(typeof result[4]).toBe("string");
    });
  });
});
