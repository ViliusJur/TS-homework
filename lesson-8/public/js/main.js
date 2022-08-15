"use strict";
const capitalize = (word) => {
    const words = word.trim().split(' ');
    const capitalizeWords = words.map((w) => w[0].toUpperCase() + w.slice(1));
    return capitalizeWords.join(' ');
};
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["CENTIMETERS"] = "cm";
    HeightUnits["METERS"] = "m";
    HeightUnits["INCHES"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["KILOGRAMS"] = "kg";
    WeightUnits["POUNDS"] = "lb";
})(WeightUnits || (WeightUnits = {}));
class Person {
    static heightUnits = HeightUnits.CENTIMETERS;
    static weightUnits = WeightUnits.KILOGRAMS;
    name;
    surname;
    age;
    height;
    weight;
    constructor(name, surname, age, height, weight, heightUnits, weightUnis) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnis);
    }
    setName(name) {
        this.name = capitalize(name);
    }
    setSurname(surname) {
        this.surname = capitalize(surname);
    }
    setAge(age) {
        if (age % 1 !== 0)
            throw new Error('Age should be integer number');
        if (age > 150)
            throw new Error('Age shouldn\'t be more then 150');
        if (age < 1)
            throw new Error('Age should\'t be less 1');
        this.age = age;
    }
    setHeight(height, units = HeightUnits.CENTIMETERS) {
        switch (units) {
            case HeightUnits.CENTIMETERS:
                this.height = height;
                break;
            case HeightUnits.METERS:
                this.height = height * 100;
                break;
            case HeightUnits.INCHES:
                this.height = height * 2.54;
                break;
            default: break;
        }
    }
    setWeight(weight, units = WeightUnits.KILOGRAMS) {
        switch (units) {
            case WeightUnits.KILOGRAMS:
                this.weight = weight;
                break;
            case WeightUnits.POUNDS:
                this.weight = weight * 0.45;
                break;
            default: break;
        }
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    getHeight() {
        if (this.height === undefined)
            return 0;
        let value;
        switch (Person.heightUnits) {
            case HeightUnits.CENTIMETERS:
                value = this.height;
                break;
            case HeightUnits.METERS:
                value = this.height / 100;
                break;
            case HeightUnits.INCHES:
                value = this.height / 2.54;
                break;
            default: value = this.height;
        }
        return Math.round(value * 100) / 100;
    }
    toString() {
        let formattedPerson = `${this.name} ${this.surname}`;
        formattedPerson += ` ${this.getHeight()} ${Person.heightUnits}`;
        formattedPerson += ` ${this.getWeight()} ${Person.weightUnits}`;
        return formattedPerson;
    }
}
const people = [
    new Person('Silvesteris', 'Stalone', 50, 160, 80, undefined, WeightUnits.POUNDS),
    new Person('Meskinas', '  Meskauskas Zuikis  ', 60, 180, 90),
    new Person('Blogas', 'Kvapas', 60, 180, 100, HeightUnits.CENTIMETERS),
];
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const foolsnames = people.map((p) => p.getFullName());
    console.log(foolsnames);
}
console.groupEnd();
console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const foolsAge = people.map((p) => p.getAge());
    console.log(foolsAge);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const foolsHeight = people.map((p) => p.getHeight());
    console.log(foolsHeight);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    console.dir({ ...Person });
    console.log(`Pakeiciu static matavimo vienetus i ${Person.heightUnits = HeightUnits.INCHES}`);
    console.log(`Static matavimo vnt -> ${Person.heightUnits}`);
    console.log({ ...Person });
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.groupEnd();
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
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
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
console.log(people.map((p) => p.toString()));
//# sourceMappingURL=main.js.map