export const generateRange = (start: number, end: number): number[] =>
  [...Array(end).keys()].map((key: number) => key + start);
