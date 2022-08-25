import messages from "../data/messages";
import Robot from "./Robot";

describe("Given a Robot class", () => {
  describe("When instantiated with a type 'developer'", () => {
    test("Then it should create a Robot with said type and the remaining default values", () => {
      const robotType = "developer";
      const robot = new Robot(robotType);

      expect(robot).toHaveProperty("name");
      expect(robot.type).toBe(robotType);
      expect(robot.message).toBe(messages.developer);
      expect(robot.battery).toBe(100);
    });

    test("Then the robot should have a reset method to change its name and get its battery back to 100", () => {
      const robotType = "developer";
      const robot = new Robot(robotType);

      const robotName = robot.name;
      const robotInitialBattery = robot.battery;

      robot.battery = 50;
      expect(robot.battery).toBe(50);

      robot.reset();

      expect(robot.name).not.toBe(robotName);
      expect(robot.battery).toBe(robotInitialBattery);
    });
  });
});
