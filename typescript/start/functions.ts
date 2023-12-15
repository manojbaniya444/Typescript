//  ?function to add 2 to the number passed in
function addTwo(num) {
  // !here num has implicitly type any
  // this doesnt throw any error now because we by default num to any
  num.toLowerCase();
  return num + 2;
}
addTwo(2);

// ?fixing the above function
function addTwoFixed(num: number) {
  // num.toLowerCase(); // this will throw an error now
  return num + 2;
}
addTwoFixed(2);

// ?convert the string to uppercase
const getUpperCase = (string) => {
  return string.toUpperCase();
};
// !this is also wrong as we are not specifying the type of the parameter
getUpperCase(10);
// *fixing the above function
const getUpperCasefixed = (string: string) => {
  return string.toUpperCase();
};
// !getUpperCase(10) will throw an error now
getUpperCase("hello world");

function getStudentDetails(name, email, rollNo) {}
// !expected three arguments but got none so error also specify the type of the arguments
// getStudentDetails();

function getStudentDetailsFixed(name: string, email: string, rollNo: number) {}
getStudentDetailsFixed("Manoj", "manojbaniya@gmail.com", 21);

// ?default parameters
function getStudentDetailsDefault(
  name: string,
  email: string,
  rollNo: number = 21
) {}
getStudentDetailsDefault("Manoj", "manojbaniya@gmail.com");

// ?return type of the function
function add(num: number, num2: number) {
  let result = num + num2;
  return "Manoj";
  // *This will not throw an error as we are returning a string and we are not assigning to return specific type
}
add(2, 3);

function addFix(num: number, num2: number): number {
  let result = num + num2;
  //   return "Manoj";
  // *This will throw an error as we are returning a string and we are assigning to return specific type
  return result;
}
addFix(2, 3);

// ?it can be anything based on the operation
const handleValue = (myVal: number) => {
  if (myVal > 10) {
    return "Greater than 10";
  } else {
    return 10;
  }
};
handleValue(20);

// ?function returning object
const returnObject = (): { name: string; age: number } => {
  //* This should return object of name string and age number
  return { name: "Mannoj", age: 21 };
};

// ?void type
const dontReturnAnything = (value: string): void => {
  console.log("I am arror function which is not returning anything");
};
function dontReturnAnything2(value: string): void {
  console.log("I a function which is not returning anything");
}

//?never type
const neverReturnAnything = (value: string): never => {
  throw new Error("I am never type");
};

// ?return type in map function
const names = ["Manoj", "Baniya"];
names.map((name): string => {
  // *here we are specifying the return type of the map function to be string only
  return name.toUpperCase();
});
