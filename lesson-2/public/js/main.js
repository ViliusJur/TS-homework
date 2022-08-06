"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const sortDrinksByPriceASC = (drink1, drink2) => drink1.price - drink2.price;
    const solution = (drinks) => [...drinks].sort(sortDrinksByPriceASC);
    const drinks = [
        { name: 'lemonade', price: 50 },
        { name: 'fanta', price: 30 },
        { name: 'lime', price: 10 },
    ];
    const sortedDrinks = solution(drinks);
    console.log({
        drinks,
        sortedDrinks,
    });
}
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map