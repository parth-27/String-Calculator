import { StringCalculator } from "../src/stringCalculator";

// Simplest tests
test("should return 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("should return the number itself if the string contains one number", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});

test("should return the sum of two comma-separated numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

test("should return the sum of multiple comma-separated numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3")).toBe(6);
});

test("should handle newlines between numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n2,3")).toBe(6);
});
