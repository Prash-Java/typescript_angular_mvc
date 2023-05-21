let flag: boolean = true;
let pi: number = 3.1415;
let firstName: string = 'Java';
let middleName: string = "Kotlin";
let lastName: String = "Python";
// NOTE: Lines 3-5 can enclose Strings types in single quotes or double quotes as '' or "";
console.log(flag);
console.log(pi);
console.log(firstName + " " + middleName + " " + lastName);

// Type Safety Issues -> Following three lines would give typescript issues
/*
pi = "Node";
flag = 10;
firstName = true;
*/

// Demonstration of any type -> we would miss features of type safety with 'any'
let myName: any = "any data type";
console.log(myName);
myName = 15;
console.log(myName);

// Template String -> this helps in long string concatenation using uptick '`'
console.log(`"Hi" ${firstName} ${middleName} ${lastName}`);