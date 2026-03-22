/**
 * Unit tests for calculator.js
 *
 * Covers all four basic operations (based on calc-basic-operations.png examples):
 *   - add      : 2 + 3
 *   - subtract : 10 - 4
 *   - multiply : 45 * 2
 *   - divide   : 20 / 5
 *
 * Also covers edge cases: negatives, decimals, zeros, and division-by-zero.
 */

const { add, subtract, multiply, divide } = require("../calculator");

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
