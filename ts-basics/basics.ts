/*
---------------
Primitives
---------------
*/
let age: number;
age = 18;

let userName: string;
userName = 'Max';

let isStudent: boolean;
isStudent = true;

/*
---------------
Array and Object
---------------
*/
let hobbies: string[];
hobbies = ['fishing', 'cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 28,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  { name: 'Jane', age: 22 },
  { name: 'Ross', age: 29 },
];

/*
---------------
Type inference
---------------
*/
let course = 'React + Typescript course'; // ==> string
// course = 12345; ==> error

/*
---------------
Union types
---------------
*/
let courseName: string | number = 'React + Typescript course'; // ==> string
courseName = 12345;

/*
---------------
Type Aliases
---------------
*/
type Person = {
  name: string;
  age: number;
};

let anotherPerson: Person;
anotherPerson = {
  name: 'Jack',
  age: 40,
};

let peopleArr: Person[];

/*
---------------
Function & types
---------------
*/
const add = (a: number, b: number): number => {
  return a + b;
};

const printMessage = (message: any): void => {
  console.log(message);
};

/*
---------------
Generics
---------------
*/
const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const sampleArray = [1, 2, 3]; 
const updatedArray = insertAtBeginning(sampleArray, 0); // ==> number[]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ==> string[]

// updatedArray[0].split(''); ==> error
