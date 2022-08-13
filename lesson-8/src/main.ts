/* eslint-disable no-lone-blocks */
enum HeightUnits {
  CENTIMETERS ='cm',
  METERS = 'm',
  INCHES = 'in'
}
class Person {
  private name!: string;

  private surname!: string;

  private age!: number;

  private height!: number;

  public constructor(
    name: string,
    surname: string,
    age: number,
    height: number,
    heightUnits?: HeightUnits,
  ) {
    this.setName(name);
    this.setSurname(surname);
    this.setAge(age);
    this.setHeight(height, heightUnits);
  }

  public setName(name: string) {
    this.name = name;
  }

  public setSurname(surname: string) {
    this.surname = surname;
  }

  public setAge(age: number) {
    if (age % 1 !== 0) throw new Error('Age should be integer number');
    if (age > 150) throw new Error('Age shouldn\'t be more then 150');
    if (age < 1) throw new Error('Age should\'t be less 1');
    this.age = age;
  }

  public setHeight(height: number, units: HeightUnits = HeightUnits.CENTIMETERS) {
    switch (units) {
      case HeightUnits.CENTIMETERS: this.height = height; break;
      case HeightUnits.METERS: this.height = height * 100; break;
      case HeightUnits.INCHES: this.height = height * 2.54; break;
      default: break;
    }
  }

  public getFullName() {
    return `${this.name} ${this.surname}`;
  }

  public getAge() {
    return this.age;
  }

  public getHeight() {
    return this.height;
  }
}
const people: Person[] = [
  new Person('Silvesteris', 'Stalone', 50, 160),
  new Person('Meskinas', 'Meskauskas', 100, 200, HeightUnits.INCHES),
];
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
  const foolsnames: string[] = people.map((p) => p.getFullName());
  console.log(foolsnames);
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
  // const foolsAge: any[] = people.map((p) => p.getFullName() + p.getAge());
  // console.log(foolsAge);

  const foolsAge: number[] = people.map((p) => p.getAge());
  console.log(foolsAge);
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
  const foolsHeight: number[] = people.map((p) => p.getHeight());
  console.log(foolsHeight);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
-
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{

}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{

}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
