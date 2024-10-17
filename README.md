# String Calculator TDD Kata

This project implements the **String Calculator Kata** in TypeScript following the principles of **Test-Driven Development (TDD)**. The String Calculator is a simple utility that calculates the sum of numbers provided in a string, with support for custom delimiters, newlines, and exception handling for negative numbers.

## Features

- Handles empty strings: `""` → `0`
- Sums a list of comma-separated numbers: `"1,2,3"` → `6`
- Supports newlines as delimiters: `"1\n2,3"` → `6`
- Supports custom delimiters: `"//;\n1;2"` → `3`
- Throws an exception for negative numbers: `"1,-2"` → `Error: Negative numbers not allowed: -2`
- Lists all negative numbers in the exception: `"1,-2,-3"` → `Error: Negative numbers not allowed: -2, -3`

## Requirements

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [npm](https://www.npmjs.com/get-npm) (v8 or higher)

## Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/string-calculator-kata.git
   cd string-calculator-kata
2. Install dependencies:
   ```bash
   npm install
3. Compiles the TypeScript code to JavaScript using the TypeScript compiler.
   ```bash
   npm run build
4. Runs the Jest test cases.
   ```bash
   npm test
5. Watches for changes in your files and reruns tests automatically.
   ```bash
   npm run test:watch
6. Runs tests and generates a code coverage report.
   ```bash
   npm run test:coverage

## Test-Driven Development (TDD)

The development of this project followed the TDD process:

1. Write a failing test for a new feature.
2. Implement the simplest solution to make the test pass.
3. Refactor the code to improve its design while keeping the tests passing.

You can find the test cases in the `tests` folder.

## Project Structure

```php
string-calculator-kata/
│
├── src/
│   └── calculator.ts        # StringCalculator class implementation
│
├── tests/
│   └── calculator.test.ts   # Unit tests for the StringCalculator class
│
├── jest.config.js           # Jest configuration file
├── tsconfig.json            # TypeScript configuration file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
