/* eslint-disable no-lone-blocks */
type PrimitiveType = string | number | boolean;

/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai
  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['vienas', 'du', 'trys', 'keturi'];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const arrFirstElement = arr1[0];

  const solution = <Type>(arr: Type[]): Type | undefined => arr[0];

  console.log(solution(arr1));
  console.log(solution(arr2));
  console.log(arrFirstElement);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const lastElement = <Type>(arr: Type[]): Type => arr[arr.length - 1];

  console.log('Last array member value', lastElement(arr1));
  console.log(lastElement(arr2));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const primitiveTypeArr = <Type extends PrimitiveType>(arr: Type[]): Type[] => {
    const arrCopy: Type[] = arr.map((x) => x);
    return arrCopy;
  };

  console.log(primitiveTypeArr(arr1));
  console.log(primitiveTypeArr(arr2));
}
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas

  const funkcija = (arr: PrimitiveType): PrimitiveType[] => 
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  // Sprendimas ir rezultatų spausdinimas
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  // Sprendimas ir rezultatų spausdinimas
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  const people: (Person | Student | Worker)[] = [
    {
      name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
    },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    {
      name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
    },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    {
      name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
    },
  ];
}
