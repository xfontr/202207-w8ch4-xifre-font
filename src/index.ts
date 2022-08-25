import "./loadEnvironment";
import Debug from "debug";
import Developer from "./RobotTypes/Developer";
import Waiter from "./RobotTypes/Waiter";
import Cleaner from "./RobotTypes/Cleaner";
import robotNames from "./data/robotNames";

const debug = Debug("robots:index");

const cleaner = new Cleaner();
const developer = new Developer();
const waiter = new Waiter();

debug(`Created the robot ${cleaner.name} as a ${cleaner.type}`);
cleaner.work();

debug(`Created the robot ${developer.name} as a ${developer.type}`);
developer.work();

debug(`Created the robot ${waiter.name} as a ${waiter.type}`);
waiter.work();

debug(robotNames);
