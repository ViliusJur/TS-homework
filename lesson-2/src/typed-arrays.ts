/* eslint-disable no-lone-blocks */

console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
{
  const numbers: number[] = [1, -8, -6, 7, 5, 1];

  // eslint-disable-next-line no-inner-declarations
  function addPositiveNumbers(arr: number[]) {
    const positiveNumberReducer = (sum: number, num: number) :number => (num > 0 ? sum + num : sum);

    return arr.reduce(positiveNumberReducer, 0);
  }

  console.log({
    numbers,
    sumOfPositiveNumbers: addPositiveNumbers(numbers),
  });
}
console.groupEnd();
