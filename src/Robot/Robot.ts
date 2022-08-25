/* eslint-disable @typescript-eslint/lines-between-class-members */
import messages from "../data/messages";
import MaxOneHundred from "../types/MaxOneHundred";
import { IRobot, RobotMessages, RobotTypes } from "../types/robots";
import { nameGenerator } from "../utils/nameGenerator";

class Robot implements IRobot {
  name: string;
  type: RobotTypes;
  battery: MaxOneHundred = 100;
  message: RobotMessages;
  work: () => void;

  constructor(type: RobotTypes) {
    this.name = nameGenerator();
    this.type = type;
    this.message = messages[type];
  }

  reset(): void {
    this.name = nameGenerator();
    this.battery = 100;
  }
}

export default Robot;
