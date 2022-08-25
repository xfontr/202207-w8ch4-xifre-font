import createRobot from ".";
import Developer from "./RobotTypes/Developer";

describe("Given a createRobot function", () => {
  describe("When called with a robot type as an argument", () => {
    test("Then it should return a robot object witht the same type as the specified", () => {
      const robotType = "developer";
      const expectedResult = new Developer();

      const result = createRobot(robotType);
      expectedResult.name = result.name;

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
