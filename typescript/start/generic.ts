// ?In Typescript, generics are a way to create reusable components that can work over a variety of types rathe than a single one. This allow us to write flexible and reuusable functions, classes, and interfaces

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Manoj");
let output2 = identity<number>(1);
let output3 = identity<boolean>(true);

// ?In the example above, we used type variable, a special king of cariable that works on types rather than values. Here we used T, but we could have used any other name as well
// ?The identity function is now generic which takes an argument of type T and returns a value of the same type T

const generics = <Type>(arg: Type): Type => {
  return arg;
};

// *Same generic function but now with arrow function
