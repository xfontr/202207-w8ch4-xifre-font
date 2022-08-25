/* eslint-disable @typescript-eslint/lines-between-class-members */
import { IRobot, RobotMessages, RobotTypes } from "../types/robots";
import { nameGenerator } from "../utils/nameGenerator";

class Robot implements IRobot {
  name: string;
  type: RobotTypes;
  battery = 100;
  message: RobotMessages;
  reset: () => void;
  work: () => void;

  constructor() {
    this.name = nameGenerator();
  }
}

export default Robot;
