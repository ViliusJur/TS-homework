/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const lastArrIndex = (a: any[]) => a.length - 1;

  console.log(`last array element index of numbers array -> ${lastArrIndex(numbers)}`);
  console.log(`last array element index of words array -> ${lastArrIndex(words)}`);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function indexLines(arr: any[]): any {
    arr.forEach((el, idx) => {
      console.log(`(${el} index) -> ${idx}`);
    });
  }
  indexLines(words);
  indexLines(numbers);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function arrMeaningLine(arr:any[]) {
    for (let i = 0; i < arr.length; i += 1) {
      console.log(arr[i]);
    }
  }
  arrMeaningLine(words);
  arrMeaningLine(numbers);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function indexLines(arr: any[]): any {
    arr.forEach((el, idx) => {
      console.log(`[${idx}] => ${el}`);
    });
  }
  indexLines(words);
  indexLines(numbers);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const reverseArr = (arr: any[]) => {
    const otherEnd = arr.reverse();
    otherEnd.forEach((el) => {
      console.log(`${el}`);
    });
  };
  reverseArr(words);
  reverseArr(numbers);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const inOneLine = (arr: any[]): any => {
    const mapas = arr.map((el, idx) => idx);
    const newArr = Array.from(mapas);
    console.log(newArr.join(' '));
  };

  inOneLine(words);
  inOneLine(numbers);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  const inOneLine = (arr: any[]): any => {
    const mapas = arr.map((el, idx) => el);
    const newArr = Array.from(mapas);
    console.log(newArr.join(' '));
  };

  inOneLine(words);
  inOneLine(numbers);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  function indexLines(arr: any[]): any {
    arr.map((el, idx) => (`[${idx}] => ${el}`));
    console.log(...arr);
  }
  indexLines(words);
  indexLines(numbers);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  const multiply = (arr: number[]) => {
    const newArr = arr.map((value) => value * 2);
    console.log(newArr);
  };
  multiply(numbers);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  const square = (arr: number[]) => {
    const newArr = arr.map((value) => value ** 2);
    console.log(newArr);
  };
  square(numbers);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  const iMultiplyValue = (arr: number[]) => {
    const newArr = arr.map((value, index) => value * index);
    console.log(newArr);
  };
  iMultiplyValue(numbers);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  const positiveNumArr = (arr: number[]) => {
    const posArr = arr.filter((num) => num > -1);
    console.log(posArr);
  };
  positiveNumArr(numbers);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  const NoPositiveNumArr = (arr: number[]) => {
    const posArr = arr.filter((num) => num < -1);
    console.log(posArr);
  };
  NoPositiveNumArr(numbers);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  const evenNum = (arr: number[]) => {
    const posArr = arr.filter((num) => num % 2 === 0);
    console.log(posArr);
  };
  evenNum(numbers);
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  const UnEvenNum = (arr: number[]) => {
    const posArr = arr.filter((num) => num % 2 !== 0);
    console.log(posArr);
  };
  UnEvenNum(numbers);
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  const transNegativetoPositve = (arr: number[]) => {
    const postivearr = arr.map((num) => {
      if (num < 0) {
        return num * -1;
      }
      return num;
    });
    console.log(postivearr);
  };
  transNegativetoPositve(numbers);
}
console.groupEnd();
