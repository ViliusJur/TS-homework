"use strict";
console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
{
    const numbers = [1, -8, -6, 7, 5, 1];
    function addPositiveNumbers(arr) {
        const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
        return arr.reduce(positiveNumberReducer, 0);
    }
    console.log({
        numbers,
        sumOfPositiveNumbers: addPositiveNumbers(numbers),
    });
}
console.groupEnd();
//# sourceMappingURL=typed-arrays.js.map