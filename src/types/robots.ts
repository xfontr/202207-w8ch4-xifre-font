export type RobotTypes = "Cleaner" | "Waiter" | "Developer";

export type RobotMessages =
  | "Larala larita, I clean my little house"
  | "Do you feel like a mini of fuet?"
  | "JavaScript is cool - I develop with JavaScript -> I'm cool";

interface RobotData {
  name: string;
  type: RobotTypes;
  battery: number;
  message: RobotMessages;
}

interface RobotActions {
  reset: () => void;
  work: () => void;
}

export interface IRobot extends RobotActions, RobotData {}
