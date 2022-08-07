/* eslint-disable no-lone-blocks */
console.group('Tuples - užduotys');
{
 type RobotasIrgiZmogus = [string, number];
 type Suo = {
    name: string,
    age: number,
    breed: 'Doberman'|'Dvarneska',
 }
 type Zmogus = {
    name: string,
    age: number,
 }
 type Duetas = [Zmogus, Suo];
 type PointTuple = [number, number];
 type TriangleTuple = [PointTuple, PointTuple, PointTuple];

 console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
 {
   const zmogus1: RobotasIrgiZmogus = ['R2D', 10];
   console.log(zmogus1);
 }
 console.groupEnd();

 console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
 {
   const duetas: Duetas = [
     {
       name: 'Petras',
       age: 10,
     },
     {
       name: 'Pupsikas',
       age: 3,
       breed: 'Dvarneska',
     }];
   console.log(duetas);
 }
 console.groupEnd();

 console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
 {
   const triangle1: TriangleTuple = [[-2, 1], [2, 2], [3, 1]];
   const rightTriangle: TriangleTuple = [[0, 0], [4, 0], [4, 4]];

   console.log({
     triangle1,
     rightTriangle,
   });
 }
 console.groupEnd();
}
console.groupEnd();
