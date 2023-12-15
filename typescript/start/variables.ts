// typescript for a variable:

// strings
let greetings: string = "Hello World";
// now greetings can only be a string
// error: greetings = 6; greeting is a string
greetings.toLowerCase();
console.log("Type of greetings is string: ", greetings);

// number
let age: number = 21;
// now age can only be a number
// error: age = "Hello World"; age is a number
// age.toLowerCase(); age is a number

console.log("Type of age is number: ", age);

// boolean
let isDeveloper: boolean = true;
// now isDeveloper can only be a boolean
// error: isDeveloper = "Hello World"; isDeveloper is a boolean
// isDeveloper.toLowerCase(); isDeveloper is a boolean
console.log("Type of isDeveloper is boolean: ", isDeveloper);

// type inference
let rollNo: number;
rollNo = 21;
// dont need to do it typescript will automatically infer the type and it is just redundant
// this is not a good practice

// any type
// we usually want avoid this because any isn't type checked
let random;

const getRandom = () => {
  return Math.random() > 0.5 ? 21 : "Hello World";
};

random = getRandom(); // this is infered as any
// automatic inference is not good here

let returnedValue: string;

const getString = () => {
  return "Hello World";
};

returnedValue = getString(); // we should get here string otherwise it will throw an error

// due to the error that cant redeclare a variable
export {};
