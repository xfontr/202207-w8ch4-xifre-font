import Robot from "../Robot/Robot";
import { IRobot } from "../types/robots";

class Developer extends Robot implements IRobot {
  constructor() {
    super("developer");
  }
}

export default Developer;
