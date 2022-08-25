import Robot from "../Robot/Robot";
import { IRobot } from "../types/robots";

class Cleaner extends Robot implements IRobot {
  constructor() {
    super("cleaner");
  }
}

export default Cleaner;
