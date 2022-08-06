/* eslint-disable no-lone-blocks */
console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
  const multiply = (a: number, b: number) => a * b;

  const pwr = function (base: number, power: number): number {
    return base ** power;
  };

  const squareRoot = (number: number): number => number ** (1 / 2);

  const root = function (base: number, nthRoot: number) {
    return base ** (1 / nthRoot);
  };

  const printBlueText = (text: string): void => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: pwr(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();

console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
  type twoNum = (a: number, b: number) => number;
  type textDeclaration = (text: string) => void;
  type oneNum = (nbr: number) => number;

  const multiply: twoNum = (a, b) => a * b;

  const pwr: twoNum = function (base, power) {
    return base ** power;
  };

  const squareRoot: oneNum = (number) => number ** (1 / 2);

  const root: twoNum = function (base, nthRoot) {
    return base ** (1 / nthRoot);
  };

  const printBlueText: textDeclaration = (text) => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: pwr(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
