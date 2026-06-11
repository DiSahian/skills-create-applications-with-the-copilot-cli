#!/usr/bin/env node
// CLI entrypoint for the calculator
// Supports these operations (from the image/issue):
//  - addition:       +, add
//  - subtraction:    -, sub
//  - multiplication: ×, x, *, mul
//  - division:       ÷, /, div
//
// Usage examples:
//   node src/index.js add 2 3    # 5
//   node src/index.js div 10 2   # 5
//   node src/index.js mul 3 4    # 12
//   node src/index.js sub 5 2    # 3

const calc = require('./calculator');

function printUsageAndExit(code = 1) {
  console.error('Usage: node src/index.js <operation> <a> <b>');
  console.error('Operations: add, sub, mul, div or symbols + - * / (also ×, ÷, x)');
  process.exit(code);
}

function parseNumber(s) {
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

const args = process.argv.slice(2);
if (args.length !== 3) {
  printUsageAndExit(1);
}

let [op, aStr, bStr] = args;
const a = parseNumber(aStr);
const b = parseNumber(bStr);
if (a === null || b === null) {
  console.error('Error: both operands must be valid numbers');
  printUsageAndExit(1);
}

// Normalize operation names/symbols
op = op.toLowerCase();
let fn;
switch (op) {
  case 'add':
  case '+':
    fn = calc.add;
    break;
  case 'sub':
  case '-':
    fn = calc.sub;
    break;
  case 'mul':
  case '*':
  case 'x':
  case '×':
    fn = calc.mul;
    break;
  case 'div':
  case '/':
  case '÷':
    fn = calc.div;
    break;
  default:
    console.error(`Unknown operation: ${op}`);
    printUsageAndExit(1);
}

try {
  const result = fn(a, b);
  // For integer-like results, print without excessive decimals
  if (Number.isInteger(result)) {
    console.log(result);
  } else {
    console.log(result);
  }
  process.exit(0);
} catch (err) {
  if (err.message && err.message.includes('Division by zero')) {
    console.error('Error: Division by zero');
    process.exit(2);
  }
  console.error('Error:', err.message || String(err));
  process.exit(1);
}
