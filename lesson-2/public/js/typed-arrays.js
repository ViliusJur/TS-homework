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
console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
{
    const getFirstLetters = (words) => words
        .reduce((prev, word) => prev + word[0], 'Sutrumpintai ->');
    const arrOfChanels = [
        ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
        ['Lietuvos', 'Respublikos', 'Televizija'],
        ['Loughing', 'Out', 'Loud'],
    ];
    arrOfChanels.forEach((words) => {
        console.log(`${words.join(',')} ->`, getFirstLetters(words));
    });
}
console.groupEnd();
console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
{
    const multiplyFnc = (nbr) => nbr.reduce((prev, next) => prev * next);
    const numberArr = [
        [1, 7, 8],
        [98, 74, 5, 0],
        [17, 10, 5],
    ];
    numberArr.forEach((nbr) => console.log(`skaičių ${nbr} sandauga yra lygi ${multiplyFnc(nbr)}`));
}
console.groupEnd();
//# sourceMappingURL=typed-arrays.js.map