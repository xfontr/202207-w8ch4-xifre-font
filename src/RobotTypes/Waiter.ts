import Robot from "../Robot/Robot";
import { IRobot } from "../types/robots";

class Waiter extends Robot implements IRobot {
  constructor() {
    super("waiter");
  }
}

export default Waiter;
