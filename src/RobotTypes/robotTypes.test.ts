import messages from "../data/messages";
import Cleaner from "./Cleaner";
import Developer from "./Developer";
import Waiter from "./Waiter";

describe("Given a Cleaner robot class", () => {
  describe("When instantiated", () => {
    test("Then it should return a robot with a cleaner type and message", () => {
      const robotType = "cleaner";
      const robot = new Cleaner();

      expect(robot).toHaveProperty("name");
      expect(robot.type).toBe(robotType);
      expect(robot.message).toBe(messages.cleaner);
      expect(robot.battery).toBe(100);
    });
  });
});

describe("Given a Waiter robot class", () => {
  describe("When instantiated", () => {
    test("Then it should return a robot with a waiter type and message", () => {
      const robotType = "waiter";
      const robot = new Waiter();

      expect(robot).toHaveProperty("name");
      expect(robot.type).toBe(robotType);
      expect(robot.message).toBe(messages.waiter);
      expect(robot.battery).toBe(100);
    });
  });
});

describe("Given a Developer robot class", () => {
  describe("When instantiated", () => {
    test("Then it should return a robot with a cleaner type and message", () => {
      const robotType = "developer";
      const robot = new Developer();

      expect(robot).toHaveProperty("name");
      expect(robot.type).toBe(robotType);
      expect(robot.message).toBe(messages.developer);
      expect(robot.battery).toBe(100);
    });
  });
});
