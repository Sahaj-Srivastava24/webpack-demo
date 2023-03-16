export const inputsAreValid = (...input: number[]) => {
  return input.every(num => typeof num === "number" && !isNaN(num));
};
