const calc = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow('Division by zero');
  });

  test('works with floats and precision (0.1 + 0.2 ~= 0.3)', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

  test('negative numbers: -5 + 2 = -3', () => {
    expect(calc.add(-5, 2)).toBe(-3);
  });

  test('large numbers multiplication', () => {
    expect(calc.mul(1e6, 3)).toBe(3e6);
  });

  // Extended operations tests (modulo, power, square root)
  test('modulo: 5 % 2 = 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => calc.modulo(1, 0)).toThrow('Modulo by zero');
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 = 0.5', () => {
    expect(calc.power(2, -1)).toBeCloseTo(0.5, 10);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('squareRoot of negative number throws', () => {
    expect(() => calc.squareRoot(-9)).toThrow('Square root of negative number');
  });
});
