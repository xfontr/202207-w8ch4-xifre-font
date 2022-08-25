import {
  assignRandomCharacter,
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

describe("Given a assignRandomCharacter function", () => {
  describe("When called with a number 1 as an argument", () => {
    test("Then it should return either a string or a number", () => {
      const randomNumber = 1;
      const result = assignRandomCharacter(randomNumber);

      expect(typeof result === "number" || typeof result === "string").toBe(
        true
      );
    });
  });

  describe("When called wiht a numbner 0 as an argument", () => {
    test("Then it should return a letter", () => {
      const randomNumber = 0;
      const result = assignRandomCharacter(randomNumber);

      expect(typeof result === "string").toBe(true);
    });
  });
});
