/* eslint-disable no-lone-blocks */
console.group('Union operators - užduotys');
{
    type Accommodation = {
        type: 'House' | 'Flat',
        address: string,
        floor: 1|2
      };

      type Car = {
        transmission: 'Automatic' | 'Manual',
      };

      type Assets = Accommodation[] | Car[];

      console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
      {
        const acomodation: Accommodation = {
          type: 'House',
          address: 'Serbentu 10',
          floor: 2,
        };

        console.log(acomodation);
      }
      console.groupEnd();

      console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
      {
        const car: Car = {
          transmission: 'Manual',
        };

        console.log(car);
      }
      console.groupEnd();

      console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
      {
        const turtai: Assets = [{
          type: 'House',
          address: 'Serbentu 10',
          floor: 2,
        }];
        const turtai2: Assets = [{
          transmission: 'Manual',
        }];
        console.log(...turtai);
        console.log(...turtai2);
      }
      console.groupEnd();
}
console.groupEnd();
