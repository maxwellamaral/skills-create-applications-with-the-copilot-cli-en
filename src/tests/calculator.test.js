/**
 * Unit tests for calculator.js
 *
 * Covers all four basic operations (based on calc-basic-operations.png examples):
 *   - add      : 2 + 3
 *   - subtract : 10 - 4
 *   - multiply : 45 * 2
 *   - divide   : 20 / 5
 *
 * Also covers extended operations:
 *   - modulo     : 10 % 3
 *   - power      : 2 ^ 8
 *   - squareRoot : √25
 *
 * Also covers edge cases: negatives, decimals, zeros, division-by-zero,
 * modulo-by-zero, and square root of negative numbers.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// ── Addition ──────────────────────────────────────────────────────────────────
describe("add", () => {
  test("2 + 3 = 5 (from image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adding zero returns the same number", () => {
    expect(add(7, 0)).toBe(7);
    expect(add(0, 7)).toBe(7);
  });

  test("negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("positive and negative numbers", () => {
    expect(add(-3, 5)).toBe(2);
  });

  test("decimal numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe("subtract", () => {
  test("10 - 4 = 6 (from image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("positive numbers", () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test("subtracting zero returns the same number", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("result is negative when b > a", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe("multiply", () => {
  test("45 * 2 = 90 (from image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplying by zero returns zero", () => {
    expect(multiply(100, 0)).toBe(0);
    expect(multiply(0, 100)).toBe(0);
  });

  test("multiplying by one returns the same number", () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test("negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("positive and negative numbers", () => {
    expect(multiply(-5, 6)).toBe(-30);
  });

  test("decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ── Division ──────────────────────────────────────────────────────────────────
describe("divide", () => {
  test("20 / 5 = 4 (from image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("dividing by one returns the same number", () => {
    expect(divide(15, 1)).toBe(15);
  });

  test("zero divided by a number returns zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("negative dividend", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("negative divisor", () => {
    expect(divide(12, -4)).toBe(-3);
  });

  test("both negative returns positive", () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test("decimal result", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing negative number by zero", () => {
    expect(() => divide(-5, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ── Modulo ────────────────────────────────────────────────────────────────────
describe("modulo", () => {
  test("10 % 3 = 1", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("positive numbers with no remainder", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("zero numerator returns zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("decimal numbers", () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test("throws an error when divisor is zero", () => {
    expect(() => modulo(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing negative number by zero", () => {
    expect(() => modulo(-5, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ── Power (Exponentiation) ────────────────────────────────────────────────────
describe("power", () => {
  test("2 ^ 8 = 256", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("any number to the power of 0 is 1", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("any number to the power of 1 is itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("0 to any positive power is 0", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("negative base with even exponent is positive", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("negative base with odd exponent is negative", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("fractional exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });
});

// ── Square Root ───────────────────────────────────────────────────────────────
describe("squareRoot", () => {
  test("√25 = 5", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("√0 = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("√1 = 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("√2 is approximately 1.414", () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test("√100 = 10", () => {
    expect(squareRoot(100)).toBe(10);
  });

  // Edge case: square root of a negative number
  test("throws an error for a negative number", () => {
    expect(() => squareRoot(-1)).toThrow(
      "Square root of a negative number is not allowed."
    );
  });

  test("throws an error for any negative number", () => {
    expect(() => squareRoot(-25)).toThrow(
      "Square root of a negative number is not allowed."
    );
  });
});
