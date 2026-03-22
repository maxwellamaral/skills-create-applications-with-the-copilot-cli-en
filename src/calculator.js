/**
 * CLI Calculator - Node.js
 *
 * Supported operations:
 *  - add        : Addition (a + b)
 *  - subtract   : Subtraction (a - b)
 *  - multiply   : Multiplication (a * b)
 *  - divide     : Division (a / b) — with division-by-zero handling
 *  - modulo     : Remainder (a % b) — with division-by-zero handling
 *  - power      : Exponentiation (a ^ b)
 *  - squareRoot : Square root of a — with negative number handling
 *
 * Usage:
 *   node calculator.js add 5 3            # Output: 8
 *   node calculator.js subtract 9 4       # Output: 5
 *   node calculator.js multiply 6 7       # Output: 42
 *   node calculator.js divide 10 2        # Output: 5
 *   node calculator.js modulo 10 3        # Output: 1
 *   node calculator.js power 2 8          # Output: 256
 *   node calculator.js squareRoot 25      # Output: 5
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

/**
 * Returns the remainder of dividing a by b.
 * Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a % b;
}

/**
 * Raises base to the given exponent.
 * @param {number} base
 * @param {number} exp
 * @returns {number}
 */
function power(base, exp) {
  return Math.pow(base, exp);
}

/**
 * Returns the square root of a.
 * Throws an error if a is negative.
 * @param {number} a
 * @returns {number}
 */
function squareRoot(a) {
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(a);
}

// CLI entry point — only runs when executed directly (not when imported as a module)
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

const a = parseFloat(arg1);
const b = parseFloat(arg2);

// squareRoot only needs one argument; all other operations need two
const singleArgOps = ["squareRoot"];
const needsTwoArgs = !singleArgOps.includes(operation);

if (!operation || isNaN(a) || (needsTwoArgs && isNaN(b))) {
  console.error(
    "Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <a> [b]"
  );
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
    case "modulo":
      result = modulo(a, b);
      break;
    case "power":
      result = power(a, b);
      break;
    case "squareRoot":
      result = squareRoot(a);
      break;
    default:
      console.error(
        `Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`
      );
      process.exit(1);
  }

  console.log(result);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
