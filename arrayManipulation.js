function processArray(array) {
    let result = [];
    for (let num of array) {
        if (num % 2 === 0) {
            // Even number: square it
            result.push(num * num);
        } else {
            // Odd number: triple it
            result.push(num * 3);
        }
    }
    return result;
}

function main() {
    let inputArray = [];
    let input = parseInt(prompt("Enter integers separated by spaces, and type -1 to stop:"));

    // Read integers from standard input until a negative number is encountered
    while (input!== -1) {
        inputArray.push(input);
        input = parseInt(prompt("Enter integers separated by spaces, and type -1 to stop:"));
    }

    let processedArray = processArray(inputArray);

    // Print the modified array
    for (let value of processedArray) {
        console.log(value + " ");
    }
}

main();

// arrayManipulation.js

const readline = require("readline");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Modifies an array of strings based on corresponding numbers processed by processArray.
 * @param {string[]} stringsArray - An array of strings.
 * @param {number[]} numbersArray - An array of numbers processed by processArray.
 * @returns {string[]} - The modified array of strings.
 */
function formatArrayStrings(stringsArray, numbersArray) {
  // Check if the input arrays have the same length
  if (stringsArray.length !== numbersArray.length) {
    throw new Error("Input arrays must have the same length.");
  }

  // Initialize an empty result array
  const resultArray = [];

  // Iterate through each string and its corresponding number
  for (let i = 0; i < stringsArray.length; i++) {
    const string = stringsArray[i];
    const number = numbersArray[i];

    // Modify the string based on the number
    if (number % 2 === 0) {
      // Capitalize the entire string if the number is even
      resultArray.push(string.toUpperCase());
    } else {
      // Convert the string to lowercase if the number is odd
      resultArray.push(string.toLowerCase());
    }
  }

  return resultArray;
}

// Example usage:
rl.question("Enter strings (comma-separated): ", (stringsInput) => {
  const strings = stringsInput.split(",");
  rl.question("Enter numbers (comma-separated): ", (numbersInput) => {
    const numbers = numbersInput.split(",").map(Number);
    try {
      const modifiedStrings = formatArrayStrings(strings, numbers);
      console.log("Modified strings:", modifiedStrings);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      rl.close();
    }
  });
});

