const range = {
  min: 0,
  max: 9,
};

const alphabet = [
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

const randomLetterGenerator = (): string =>
  alphabet[Math.floor(Math.random() * 25)].toUpperCase();

const randomNumberGenerator = (): number =>
  Math.floor(Math.random() * (range.max - range.min + 1) + range.min);

const assignRandomCharacter = (numbersLeft: number): string | number => {
  if (numbersLeft === 0) {
    return randomLetterGenerator();
  }

  const option = Math.floor(Math.random() * 2);

  if (option === 1) {
    return randomLetterGenerator();
  }

  return randomNumberGenerator();
};

const nameGenerator = (): string => {
  let robotName: string;
  let numbersLeft = 2;

  do {
    robotName = `${robotName}${assignRandomCharacter(numbersLeft)}`;
    numbersLeft -= 1;
  } while (robotName.length > 0);

  return robotName;
};

export default nameGenerator;
