type Ran<T extends number> = number extends T ? number : RangeLength<T, []>;

type RangeLength<T extends number, R extends unknown[]> = R["length"] extends T
  ? R[number]
  : RangeLength<T, [R["length"], ...R]>;

type MaxOneHundred = Ran<101>;

export default MaxOneHundred;
