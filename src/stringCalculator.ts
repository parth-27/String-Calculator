export class StringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;
  
      let delimiterRegex = /[,\n]/;
      let numsString = numbers;
  
      // Support custom delimiters
      if (numbers.startsWith("//")) {
        const delimiterEndIdx = numbers.indexOf("\n");
        const delimiter = numbers.substring(2, delimiterEndIdx);
        delimiterRegex = new RegExp(`[${delimiter}]`);
        numsString = numbers.substring(delimiterEndIdx + 1);
      }
  
      const nums = numsString.split(delimiterRegex).map(Number);
  
      // Check for negative numbers
      const negatives = nums.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
      }
  
      // Sum all numbers
      return nums.reduce((sum, num) => sum + num, 0);
    }
  }
  
