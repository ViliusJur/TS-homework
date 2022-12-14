/* eslint-disable no-lone-blocks */
const capitalize = (word: string): string => {
  const words = word.trim().split(' ');
  const capitalizeWords = words.map((w) => w[0].toUpperCase() + w.slice(1));
  return capitalizeWords.join(' ');
};
enum HeightUnits {
  CENTIMETERS ='cm',
  METERS = 'm',
  INCHES = 'in'
}
 enum WeightUnits {
  KILOGRAMS = 'kg',
  POUNDS = 'lb'
 }
class Person {
  static heightUnits: HeightUnits = HeightUnits.CENTIMETERS;

  static weightUnits: WeightUnits = WeightUnits.KILOGRAMS;

  private name!: string;

  private surname!: string;

  private age!: number;

  private height!: number;

  private weight!: number;

  public constructor(
    name: string,
    surname: string,
    age: number,
    height: number,
    weight: number,
    heightUnits?: HeightUnits,
    weightUnis?: WeightUnits,
  ) {
    this.setName(name);
    this.setSurname(surname);
    this.setAge(age);
    this.setHeight(height, heightUnits);
    this.setWeight(weight, weightUnis);
  }

  public setName(name: string) {
    this.name = capitalize(name);
  }

  public setSurname(surname: string) {
    this.surname = capitalize(surname);
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

  public setWeight(weight:number, units:WeightUnits = WeightUnits.KILOGRAMS) {
    switch (units) {
      case WeightUnits.KILOGRAMS: this.weight = weight; break;
      case WeightUnits.POUNDS: this.weight = weight * 0.45; break;
      default: break;
    }
  }

  public getFullName() {
    return `${this.name} ${this.surname}`;
  }

  public getAge() {
    return this.age;
  }

  public getWeight() {
    return this.weight;
  }

  public getHeight(): number {
    if (this.height === undefined) return 0;

    let value;
    switch (Person.heightUnits) {
      case HeightUnits.CENTIMETERS: value = this.height; break;
      case HeightUnits.METERS: value = this.height / 100; break;
      case HeightUnits.INCHES: value = this.height / 2.54; break;
      default: value = this.height;
    }
    return Math.round(value * 100) / 100;
  }

  public toString(): string {
    let formattedPerson = `${this.name} ${this.surname}`;
    formattedPerson += ` ${this.getHeight()} ${Person.heightUnits}`;
    formattedPerson += ` ${this.getWeight()} ${Person.weightUnits}`;

    return formattedPerson;
  }
}
const people: Person[] = [
  new Person('Silvesteris', 'Stalone', 50, 160, 80, undefined, WeightUnits.POUNDS),
  new Person('Meskinas', '  Meskauskas Zuikis  ', 60, 180, 90),
  new Person('Blogas', 'Kvapas', 60, 180, 100, HeightUnits.CENTIMETERS),
];

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
{
  const foolsnames: string[] = people.map((p) => p.getFullName());
  console.log(foolsnames);
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
{
  // const foolsAge: any[] = people.map((p) => `${p.getFullName()} ${p.getAge()}`);
  // console.log(foolsAge);

  const foolsAge: number[] = people.map((p) => p.getAge());
  console.log(foolsAge);
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
{
  const foolsHeight: number[] = people.map((p) => p.getHeight());
  console.log(foolsHeight);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
  console.dir({ ...Person });
  console.log(`Pakeiciu static matavimo vienetus i ${Person.heightUnits = HeightUnits.INCHES}`);
  console.log(`Static matavimo vnt -> ${Person.heightUnits}`);
  console.log({ ...Person });
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');
console.groupEnd();

console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
{
  Person.heightUnits = HeightUnits.METERS;
  console.log('Pakeiciau static matavimo vienetus i', HeightUnits.METERS);
  console.log(people.map((p) => p.getHeight()));
  Person.heightUnits = HeightUnits.INCHES;
  console.log(`Pakeiciau static matavimo vienetus i -> ${HeightUnits.INCHES}`);
  console.log(people.map((p) => p.getHeight()));
  Person.heightUnits = HeightUnits.CENTIMETERS;
  console.log(`Pakeiciau static matavimo vienetus i -> ${HeightUnits.CENTIMETERS}`);
  console.log(people.map((p) => p.getHeight()));
}
console.groupEnd();

console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
{
  console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
console.log(people.map((p) => p.toString()));
