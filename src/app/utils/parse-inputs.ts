export const parseInputs = (...input: string[]) => {
  return input.map(str => parseInt(str));
};
