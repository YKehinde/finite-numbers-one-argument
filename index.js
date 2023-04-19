// Create a function that takes a number as the argument. The return value of this function will be a list of numbers that have a length of the argument and whose characters are such that the next character is always greater than or equal to the previous character. For example, if the argument is 2,

// 11 and 12 will be valid numbers in the return list,

// while 20 and 10 will be invalid.

const generateNumbers = (length) => {
  const results = [];

  const generateNumber = (number, position) => {
    if (position === length) {
      results.push(Number(number));
      return;
    }

    const start = Number(number[position - 1]) || 0;

    for (let i = start; i <= 9; i++) {
      generateNumber(number + i, position + 1);
    }
  }

  for (let i = 1; i <= 9; i++) {
    generateNumber(i.toString(), 1);
  }

  return results;
}

console.log(generateNumbers(3))
