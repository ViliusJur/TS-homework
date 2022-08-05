"use strict";
console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const UpperCase = (string) => string.toUpperCase();
    console.log(UpperCase('labas rytas'));
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const symbolsNumber = (par1, par2) => par1.length + par2.length;
    console.log(symbolsNumber('kas yra?', 'blet'));
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const includesLetter = (str, letter) => str.includes(letter);
    console.log(includesLetter('labas', 'z'));
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const evenOrNot = (word) => {
        if (word.length % 2 === 0) {
            return true;
        }
        return false;
    };
    console.log(evenOrNot('try'));
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const vowels = (str) => str.match(/[aeiou]/gi).length;
    console.log(vowels('aaaa'));
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const counntLetter = (word, letter) => {
        let count = 0;
        for (let i = 0; i <= word.length; i += 1) {
            if (word[i] === letter) {
                count += 1;
            }
        }
        return count;
    };
    console.log(counntLetter('labas', 'a'));
}
console.groupEnd();
//# sourceMappingURL=main.js.map