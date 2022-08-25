import messages from "../data/messages";
import Robot from "./Robot";

describe("Given a Robot class", () => {
  describe("When instantiated with a type 'developer'", () => {
    test("Then it should create a Robot with said type and the remaining default values", () => {
      const robotType = "developer";
      const robot = new Robot("developer");

      expect(robot).toHaveProperty("name");
      expect(robot.type).toBe(robotType);
      expect(robot.message).toBe(messages.developer);
      expect(robot.battery).toBe(100);
    });
  });
});
