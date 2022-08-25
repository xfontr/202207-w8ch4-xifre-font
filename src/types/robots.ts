type RobotTypes = "Cleaner" | "Waiter" | "Developer";

type RobotMessages =
  | "Larala larita, I clean my little house"
  | "Do you feel like a mini of fuet?"
  | "JavaScript is cool - I develop with JavaScript -> I'm cool";

export interface ProtoRobot {
  name: string;
  type: RobotTypes;
  battery: number;
  message: RobotMessages;
}

export interface IRobot extends ProtoRobot {
  reset: () => void;
  work: () => void;
}
