/* eslint-disable no-lone-blocks */
/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number | undefined,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  }
  // Funkcijos:
  const personToIdentity = ({ name, surname } : Person): Identity => ({ name, surname });
  // Sprendimas:
  const identities = people.map(personToIdentity);

  // Spausdinimas:
  console.log(people);
  console.log(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  type TaskProps = {
    married: NonNullable<Person['married']>,
    hasCar: NonNullable<Person['hasCar']>,
  }

  // type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  type NameSurnameMarried = {
    name: Person['name'],
    surname: Person['surname'],
    married: Person['married']
  };

  const NewObj = ({ name, surname, married } : Person) : NameSurnameMarried => ({
    name,
    surname,
    married,
  });

  const threeVal = people.map(NewObj);
  console.log(threeVal);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  type SexIncome = Pick<Required<Person>, 'sex' | 'income'>;

  const sexincomeArr = ({ sex, income }: Person): SexIncome => ({
    sex,
    income,
  });

  const result: SexIncome[] = people.map(sexincomeArr);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
type SexNameSurname = {
  name: Person['name'],
  surname: Person['surname'],
  sex: Person['sex']
}
const kuriuMasyva = ({ name, surname, sex }: Person): SexNameSurname => ({ name, surname, sex });
const result: SexNameSurname[] = people.map(kuriuMasyva);
console.log(result);

  // type SexNameSurname = Pick<Person, 'name' | 'surname' | 'sex'>;

  // const kuriuMasyva = ({ name, surname, sex }: Person): SexNameSurname => ({
  //   name,
  //   surname,
  //   sex,
  // });

  // const result: SexNameSurname[] = people.map(kuriuMasyva);

  // console.log(result);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
type Male = Omit<Person, 'sex'> & {sex: 'male'}
const isMale = ({ sex }:Person): boolean => sex === 'male';
const males: Male[] = people.filter(isMale) as Male[];
console.table(males);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  type Female = Omit<Person, 'sex'> & {sex: 'female'}
  const isFemale = ({ sex }:Person): boolean => sex !== 'male';
  const females: Female[] = people.filter(isFemale) as Female[];
  console.table(females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  type Identity = Pick<Person, 'name'| 'surname' >;

  const personHasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);
  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });
  const byReduce = (result: Identity[], { hasCar, name, surname }:Person): Identity[] => {
    if (hasCar) result.push({ name, surname });
    return result;
  };
  const peopleWithCars: Person[] = people.filter(personHasCar);
  const hasCarIdentity: Identity[] = peopleWithCars.map(createIdentity);
  const hasCarIdentity2: Identity[] = people.reduce(byReduce, []);
  hasCarIdentity.forEach((id) => console.log(`Has car: ${id.name} ${id.surname} `));

  console.log(peopleWithCars);
  console.log(hasCarIdentity);
  console.log(hasCarIdentity2);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type Merried = {
    name:Person['name'],
    surname:Person['surname']
  }

  const marriedPeopleIdentify = (result: Merried[], {
    married,
    name,
    surname,
  }:Person): Merried[] => {
    if (married) result.push({ name, surname });
    return result;
  };
  const isMarried: Merried[] = people.reduce(marriedPeopleIdentify, []);
  console.log(isMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // type CarOwnerCountBySex = {
  //   male?: number,
  //   female?: number
  // }

  // const bandomReduce = (result: CarOwnerCountBySex, person: Person): CarOwnerCountBySex => {
  //   if (person.hasCar) return result;
  //   if (result.female) result[person.sex] as CarOwnerCountBySex['female'] + 1;
  // };
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
type Salary = Omit<Person, 'income'> & {
  salary?: Person['income']
}
const converIncometoSalry = ({ income, ...person }: Person): Salary => {
  const result: Salary = { ...person };
  if (income) result.salary = income;
  return result;
};

const PeopleSalary: Salary[] = people.map(converIncometoSalry);

console.log(PeopleSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
 type WithoutIdentity = Omit<Person, 'name'|'surname'| 'sex'>;

 const incognito = ({
   name, surname, sex, ...person
 }: Person): WithoutIdentity => person;

 const newArr: WithoutIdentity[] = people.map(incognito);
 console.log(newArr);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type FullName = Omit<Person, 'name'|'surname'> & {
    fullname: string
  }

  const fullname = ({ name, surname, ...visakita }: Person): FullName => ({

    fullname: `${name} ${surname}`,
    ...visakita,
  });

  const fullNameArr: FullName[] = people.map(fullname);
  console.log(fullNameArr);
}
console.groupEnd();
