// Primitives : number string boolean
// More complext types: arrays , objects
// Function types,parameters

// Primitives
let age: number;
let userName: string;
let flag: boolean;

// More complext types

let hobbies: string[];
let marks: number[];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

//type inference

let course: string | number = "React-The Complete guide";

course = 12341;

// type alias , to define complex type definition

type Person = {
  name: string;
  age: number;
};

let nigga: Person;

let niggas: Person[];

// Functions & types:

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);


