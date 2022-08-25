/* eslint-disable @typescript-eslint/lines-between-class-members */
import "../loadEnvironment";
import Debug from "debug";
import messages from "../data/messages";
import MaxOneHundred from "../types/MaxOneHundred";
import { IRobot, RobotMessages, RobotTypes } from "../types/robots";
import { nameGenerator } from "../utils/nameGenerator";

const debug = Debug("robots:Robot:Robot");
class Robot implements IRobot {
  name: string;
  type: RobotTypes;
  battery: MaxOneHundred = 100;
  message: RobotMessages;

  constructor(type: RobotTypes) {
    this.name = nameGenerator();
    this.type = type;
    this.message = messages[type];

    const batteryDraining = setInterval(() => {
      this.battery -= 1;
      if (this.battery === 0) {
        clearInterval(batteryDraining);
      }
      switch (this.battery) {
        case 10:
          debug("I'm about to run out of battery (only 10% left)");
          break;
        case 0:
          this.work = () => {};
          clearInterval(batteryDraining);
          break;
        default:
          break;
      }
    }, 1000);
  }

  reset(): void {
    this.name = nameGenerator();
    this.battery = 100;
  }

  work(): void {
    debug(this.message);
  }
}

export default Robot;
