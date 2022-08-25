import "./loadEnvironment";
import Debug from "debug";
import Developer from "./RobotTypes/Developer";
import Waiter from "./RobotTypes/Waiter";
import Cleaner from "./RobotTypes/Cleaner";
import { RobotTypes } from "./types/robots";

const debug = Debug("robots:index");
debug("Welcome to the robots factory!");

const robots = {
  cleaner: () => new Cleaner(),
  developer: () => new Developer(),
  waiter: () => new Waiter(),
};

const createRobot = (type: RobotTypes) => robots[type]();

Object.keys(robots).forEach((robotType) => {
  createRobot(`${robotType}` as RobotTypes);
  debug(`Created a robot ${robotType}`);
});

export default createRobot;
