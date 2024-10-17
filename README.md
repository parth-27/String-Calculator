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
3. Compile the code and running the test
