// Calculator module
// Supported operations:
//  - Addition:       +, add
//  - Subtraction:    -, sub
//  - Multiplication: ×, x, *, mul
//  - Division:       ÷, /, div  (division by zero is handled with an error)

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  sub,
  mul,
  div,
  modulo,
  power,
  squareRoot,
};
