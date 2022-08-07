"use strict";
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const acomodation = {
            type: 'House',
            address: 'Serbentu 10',
            floor: 2,
        };
        console.log(acomodation);
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car = {
            transmission: 'Manual',
        };
        console.log(car);
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const turtai = [{
                type: 'House',
                address: 'Serbentu 10',
                floor: 2,
            }];
        const turtai2 = [{
                transmission: 'Manual',
            }];
        console.log(...turtai);
        console.log(...turtai2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-operators.js.map