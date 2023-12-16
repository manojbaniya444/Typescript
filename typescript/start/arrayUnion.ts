const array: string[] = []; // ?Array of string
const array2: number[] = []; // ?Array of number
const array3: Array<number> = []; // ?Array of number

// ?Union type
// *We can use two type in same if we need any one of them
let score: number | string;
// *Now here score can be number or string
score = 10;
score = "Ten";
// score = false; // !This will throw an error as score can only be number or string

// ?We can also use this in our custom type
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let person: User | Admin;
person = {
  name: "Manoj",
  id: 1,
};
person = {
  username: "Manoj",
  id: 1,
};
// person = {
//   role: "Admin",
//   id: 1,
// };
// !This will throw an error as we have not defined role in our type

// ?Union type in function
const getDbId = (id: number | string) => {
  if (typeof id === "string") {
    // id.tofixed(); // !This will throw an error as tofixed is not a string method
    return id.toUpperCase();
  } else {
    return id.toFixed();
  }
};

getDbId(1);
getDbId("one");
// getDbId(true); // !This will throw an error as we have defined id as number or string

// ?Union in array
let arrayUnion: (string | number)[];
let arrayUnion2: Array<string | number>;

// now write me the same example of tuple using array
let tuple: [string, number, boolean];
tuple = ["Manoj", 1, true];
// typle = [2, "Manoj", false]; // !This will throw an error as we have defined the type of tuple
