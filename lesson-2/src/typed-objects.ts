/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
type Person = {
    id: string,
    name: string,
    surname: string,
    age: number,
    height?: number, // Neprivaloma sabybė
    weight?: number, // Neprivaloma sabybė
  };

// Minimaliai aprašytas Person tipo objektas
const person1: Person = {
  id: '39304075689',
  name: 'Verundijus',
  surname: 'Bauda',
  age: 51,
};

// Pilnai aprašytas Person tipo objektas
const person2: Person = {
  id: '39304075689',
  name: 'Ryja',
  surname: 'Žaneirytė',
  age: 41,
  height: 1.65,
  weight: 55,
};

const person3: Person = {
  id: '39304075689',
  name: 'Brudas',
  surname: 'Veilokas',
  age: 11,
  height: 1.45,
  weight: 45,
};
// Atlikite užduotis, funkcijas aprašydami tipais
console.group('1. Sukurkite funkciją kuri patikrina ar žmogus yra pilnametis');
{
    type CreateFullname = (person: Person) => string;
    const createFullname: CreateFullname = ({ name, surname }) => `${name} ${surname}`;

    type CheckAge = (age: Person) => string;
    const isAdult: CheckAge = ({ age }) => (age > 18 ? 'pilnametis' : 'nepilnametis');

    console.log({
      [createFullname(person1)]: isAdult(person1),
      [createFullname(person2)]: isAdult(person2),
      [createFullname(person3)]: isAdult(person3),
    });
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri patikrina ar Person tipo objektas turi ūgį ir svorį');
{
    type CreateFullname = (person: Person) => string;
    const createFullname: CreateFullname = ({ name, surname }) => `${name} ${surname}`;

    const isFullyDescribedPerson: CreateFullname = ({ height, weight }) => (height && weight ? 'visi duomenis' : 'ūgis/svoris nežinomi');

    console.log({
      [createFullname(person1)]: isFullyDescribedPerson(person1),
      [createFullname(person2)]: isFullyDescribedPerson(person2),
      [createFullname(person3)]: isFullyDescribedPerson(person3),
    });
}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri grąžina žmogaus incialus');
{
    type CreateFullname = (person: Person) => string;
    const createFullname: CreateFullname = ({ name, surname }) => `${name} ${surname}`;

    const createInitials: CreateFullname = ({ name, surname }) => {
      const newArr = Array.from(name[0] + surname[0]);
      return newArr.join('');
    };

    console.log({
      [createFullname(person1)]: createInitials(person1),
      [createFullname(person2)]: createInitials(person2),
      [createFullname(person3)]: createInitials(person3),
    });
}
console.groupEnd();
