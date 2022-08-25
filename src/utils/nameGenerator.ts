import Debug from "debug";
import robotNames from "../data/robotNames";
import verifyName from "./verifyName";

const debug = Debug("robots:asdf");

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

export const composeName = (): (string | number)[] => {
  const composedName = new Array(5).fill("");

  const finalComposition = composedName.map((character, index) =>
    index < 2 ? randomNumberGenerator() : randomLetterGenerator()
  );
  return finalComposition;
};

export const nameGenerator = (): string => {
  const protoName = composeName().sort(() => 0.5 - Math.random());
  const finalName = protoName.toString().replaceAll(",", "");
  return finalName;
};
