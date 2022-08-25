import robotNames from "../data/robotNames";
import verifyName from "./verifyName";

const range = {
  min: 0,
  max: 9,
};

export const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const randomLetterGenerator = (): string =>
  alphabet[Math.floor(Math.random() * 26)].toUpperCase();

export const randomNumberGenerator = (): number =>
  Math.floor(Math.random() * (range.max - range.min + 1) + range.min);

export const assignRandomCharacter = (numbersLeft: number): string | number => {
  if (numbersLeft === 0) {
    return randomLetterGenerator();
  }

  const option = Math.floor(Math.random() * 2 + 1);

  if (option === 1) {
    return randomLetterGenerator();
  }

  return randomNumberGenerator();
};

export const nameGenerator = (): string => {
  let robotName: string;
  let numbersLeft: number;

  const createName = () => {
    robotName = "";
    numbersLeft = 2;

    do {
      robotName = `${robotName}${assignRandomCharacter(numbersLeft)}`;
      numbersLeft -= 1;
    } while (robotName.length < 5);
  };

  do {
    createName();
  } while (verifyName(robotName));

  robotNames.push(robotName);

  return robotName;
};
