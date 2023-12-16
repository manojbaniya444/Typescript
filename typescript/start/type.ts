// ?Type aliasis
// *our custom type
type User = {
  name: string;
  email: string;
  contact: number;
};

// *This function will accept a user object of user type and return type void by default as we are not returning anything
function createUser(user: User) {}
createUser({
  name: "Manoj",
  email: "manojbaniya@gmail.com",
  contact: 9800000000,
});
// !createUser({ name: 5, email: 5, contact: "Hello" }); this will throw an error as we are passing wrong type

// *function which accept user of User type and return object of User type
function createUserReturn(user: User): User {
  return user;
  // ! return "Hello"; error because we need to return object of User type
}

const arrowFuncType = (user: User): void => {};

type Coordinate = {
  x: number;
  y: number;
};

function printCoordinate(point: Coordinate): void {
  console.log(point.x);
  console.log(point.y);
}

printCoordinate({ x: 10, y: 20 });

export {};
