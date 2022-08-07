/* eslint-disable no-lone-blocks */
console.group('Literal types - užduotys');
{
  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type GermanyCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type Doberman = 'Doberman';
  type ChowChow = 'ChowChow';
  type Dalmantin = 'Dalmantin';
  type Buldog = 'Buldog';
  type Mops = 'Mops';
  type Breed = Doberman | ChowChow | Dalmantin | Buldog | Mops;

  type Engine = 'Engine';
  type Trasmission = 'Trasmission';
  type Wheel = 'Wheel';
  type FuelTank = 'FuelTank';
  type FuelFilter = 'FuelFilter';
  type CarPart = Engine | Trasmission | Wheel | FuelTank | FuelFilter;

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const city1: GermanyCity = 'Munich';
    console.log(city1);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const bree: Breed = 'Doberman';
    console.log(bree);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const parts: CarPart[] = ['Engine', 'FuelFilter'];
    console.log(parts);
  }
  console.groupEnd();
}
console.groupEnd();
