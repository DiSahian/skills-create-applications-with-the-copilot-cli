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

module.exports = {
  add,
  sub,
  mul,
  div,
};
