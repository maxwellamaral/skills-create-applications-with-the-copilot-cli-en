/**
 * CLI Calculator - Node.js
 *
 * Supported operations:
 *  - add      : Addition (a + b)
 *  - subtract : Subtraction (a - b)
 *  - multiply : Multiplication (a * b)
 *  - divide   : Division (a / b) — with division-by-zero handling
 *
 * Usage:
 *   node calculator.js add 5 3       # Output: 8
 *   node calculator.js subtract 9 4  # Output: 5
 *   node calculator.js multiply 6 7  # Output: 42
 *   node calculator.js divide 10 2   # Output: 5
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b.
 * Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// CLI entry point — only runs when executed directly (not when imported as a module)
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

const a = parseFloat(arg1);
const b = parseFloat(arg2);

if (!operation || isNaN(a) || isNaN(b)) {
  console.error("Usage: node calculator.js <add|subtract|multiply|divide> <a> <b>");
  process.exit(1);
}

try {
  let result;

  switch (operation) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    default:
      console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }

  console.log(result);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide };
