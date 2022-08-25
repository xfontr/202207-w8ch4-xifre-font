import messages from "../data/messages";
import Robot from "./Robot";

jest.useFakeTimers();

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

    test("Then, after 5 seconds, the robot battery life should lower to 95", () => {
      const robotType = "developer";
      const robot = new Robot(robotType);

      const robotInitialBattery = robot.battery;
      const robotExpectedBattery = 95;

      jest.advanceTimersByTime(5000);

      expect(robot.battery).not.toBe(robotInitialBattery);
      expect(robot.battery).toBe(robotExpectedBattery);
    });

    test("Then, after 90 seconds, the robot should send a warning message", () => {
      const robotType = "developer";
      const robot = new Robot(robotType);

      const robotInitialBattery = robot.battery;
      const robotExpectedBattery = 95;

      jest.advanceTimersByTime(5000);

      expect(robot.battery).not.toBe(robotInitialBattery);
      expect(robot.battery).toBe(robotExpectedBattery);
    });
  });
});
