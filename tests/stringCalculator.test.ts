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


test("should handle custom delimiters", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  
  test("should throw an error for negative numbers", () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });
  
  test("should throw an error listing all negative numbers", () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
  });
  
