"use strict";
const person1 = {
    id: '39304075689',
    name: 'Verundijus',
    surname: 'Bauda',
    age: 51,
};
const person2 = {
    id: '39304075689',
    name: 'Ryja',
    surname: 'Žaneirytė',
    age: 41,
    height: 1.65,
    weight: 55,
};
const person3 = {
    id: '39304075689',
    name: 'Brudas',
    surname: 'Veilokas',
    age: 11,
    height: 1.45,
    weight: 45,
};
console.group('1. Sukurkite funkciją kuri patikrina ar žmogus yra pilnametis');
{
    const createFullname = ({ name, surname }) => `${name} ${surname}`;
    const isAdult = ({ age }) => (age > 18 ? 'pilnametis' : 'nepilnametis');
    console.log({
        [createFullname(person1)]: isAdult(person1),
        [createFullname(person2)]: isAdult(person2),
        [createFullname(person3)]: isAdult(person3),
    });
}
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri patikrina ar Person tipo objektas turi ūgį ir svorį');
{
    const createFullname = ({ name, surname }) => `${name} ${surname}`;
    const isFullyDescribedPerson = ({ height, weight }) => (height && weight ? 'visi duomenis' : 'ūgis/svoris nežinomi');
    console.log({
        [createFullname(person1)]: isFullyDescribedPerson(person1),
        [createFullname(person2)]: isFullyDescribedPerson(person2),
        [createFullname(person3)]: isFullyDescribedPerson(person3),
    });
}
console.groupEnd();
console.group('3. Sukurkite funkciją, kuri grąžina žmogaus incialus');
{
    const createFullname = ({ name, surname }) => `${name} ${surname}`;
    const createInitials = ({ name, surname }) => {
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
//# sourceMappingURL=typed-objects.js.map