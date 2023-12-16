// ?In Typescript, an interface is a way to define a contract for a certain structure of an object.It's a powerful way to define and enforce specific shapes for javascript objects

// ?Interface and type in Typescript can often be used interchangeably as they both provide ways to determine the shape of an object. However there are some differences

interface User {
  id: number;
  name: string;
  email: string;
}

// *This object adheres to the User interface
let user: User = {
  id: 1,
  name: "Manoj",
  email: "manojbaniya@gmail.com",
};

// let invalidUser: User = { name: "Manoj" }; // !This object does not adhere to the User interface as it does not have all the required properties

// *1)Extension: Interfaces can be extended and merged, but types cannot. This means we can create an interface, and then create another interface with the same name , and Typescript will merge the two together to create a single interface that has the properties of both

interface Details {
  address: string;
}

interface Details {
  street: string;
}

let details: Details = {
  address: "Kathmandu",
  street: "Kathmandu",
};

// let details2: Details = {
//   address: "Jhapa",
// };
// !Invalid because property street is missing

// interface Details {
//   address: boolean;
// }
// !Invalid because we cannot redeclare the same interface address which was string before

// *2) Types can represent more than complex types than interfaces
type StringOrNumber = string | number;

// *3) Types are generally used for React props and state, while interfaces are used for data : Interfaces are generally when defining the shape for object/classes. Types are generally used for primitives, unions, intersections etc.

export {};
