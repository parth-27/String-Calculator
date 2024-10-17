export class StringCalculator {
    add(numbers: string): number {
      if (numbers === "") return 0;
      
      // Split by comma or newline
      const delimiters = /[,\n]/;
      const nums = numbers.split(delimiters).map(Number);
      
      // Sum all numbers
      return nums.reduce((sum, num) => sum + num, 0);
    }
  }
  
