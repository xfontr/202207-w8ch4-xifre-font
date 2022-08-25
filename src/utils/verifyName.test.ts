import robotNames from "../data/robotNames";
import verifyName from "./verifyName";

describe("Given a verifyName function", () => {
  describe("When instantiated with a robot name as an argument", () => {
    test("Then it should return false if the robots name array has the same name as the string", () => {
      const robotName = "2XN9D";
      const expectedResult = false;

      const result = verifyName(robotName);

      expect(result).toBe(expectedResult);
    });

    test("Then it should return true if the arrays includes said name", () => {
      const robotName = "2XN9D";
      const expectedResult = true;

      robotNames.push(robotName);
      const result = verifyName(robotName);

      expect(result).toBe(expectedResult);
      robotNames.pop();
    });
  });
});
