import { generateNumbers } from "../numberGenerator";

it("should return generated numbers", () => {
  const list = generateNumbers(1, 3);
  expect(list.length).toEqual(3);
});

it("should return the right maximum and minimum values", () => {
  const list = generateNumbers(1, 3);
  expect(list[0].pbNumber).toEqual(79379206);
  expect(list[2].pbNumber).toEqual(79379208);
});

it("should return undefined when undefined values passed", () => {
  const listUndefinedCounter = generateNumbers(null, 10);
  expect(listUndefinedCounter).toEqual(undefined);

  const listUndefinedRange = generateNumbers(2, null);
  expect(listUndefinedRange).toEqual(undefined);

  const listAllUndefinedParams = generateNumbers(null, null);
  expect(listAllUndefinedParams).toEqual(undefined);
});
