/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-classes-per-file */
// ↓↓↓ Tipai ↓↓↓

type ForEachCallback<T> = (value: T) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
class ListNode<T> {
  constructor(
    public data: T,
    public next: ListNode<T> | null = null,
  ) {}
}

class List<T> {
  private head: ListNode<T> | null;

  private tail: ListNode<T> | null;

  constructor(data?: T) {
    if (data !== undefined) {
      this.head = new ListNode(data);
      this.tail = this.head;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  public unshift = (data: T): void => {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  public push = (data: T): void => {
    const newNode = new ListNode(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  public forEach = (callback: ForEachCallback<T>): void => {
    if (this.head === null) return;

    let currentNode: ListNode<T> = this.head;

    while (true) {
      if (currentNode.next === null) break;
      callback(currentNode.data);
      currentNode = currentNode.next;
    }
  };
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
// 2. | 3. | 5.
const stringList: List<string> = new List();
const numberList: List<number> = new List(5);

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
  const stringNode1: ListNode<string> = { data: 'labas', next: null };
  const stringNode2: ListNode<string> = { data: 'vakaras', next: stringNode1 };
  console.log({
    listNode1: stringNode1,
    listNode2: stringNode2,
  });
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
  console.log('Tučias string sąrašas');
  console.log(stringList);

  console.log('number sąrašas');
  console.log(numberList);
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
  console.log('String sąrašas');
  console.log(stringList);

  console.log('Pridedamas 1', 'pirmas');
  stringList.unshift('pirmas');
  console.log('Sąrašas po pridėjimo', { ...stringList });

  console.log('Pridedamas 2', 'antras');
  stringList.unshift('antras');
  console.log('Sąrašas po pridėjimo', { ...stringList });

  console.log('Pridedamas Mazgas 3', 'trečias');
  stringList.unshift('trečias');
  console.log('Sąrašas po pridėjimo', { ...stringList });
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
  console.log('String sąrašas');
  console.log(numberList);

  console.log('Pridedamas Mazgas 1', 1);
  numberList.push(1);
  console.log('Sąrašas po pridėjimo', { ...numberList });

  console.log('Pridedamas Mazgas 2', 2);
  numberList.push(2);
  console.log('Sąrašas po pridėjimo', { ...numberList });

  console.log('Pridedamas Mazgas 3', 3);
  numberList.push(3);
  console.log('Sąrašas po pridėjimo', { ...numberList });
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  console.log('string sąrašo spausdinimas');
  stringList.forEach((str) => console.log(str));

  const stringArr: string[] = [];
  const putInStringArr = (x: number): void => {
    stringArr.push(String(x));
  };

  console.log('number sąrašo spausdinimas');
  numberList.forEach(putInStringArr);
  const numberListStringRepresentation: string = stringArr.join(' → ');
  console.log(numberListStringRepresentation);
}
console.groupEnd();
