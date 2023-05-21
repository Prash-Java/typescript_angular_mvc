var flag = true;
var pi = 3.1415;
var firstName = "Java";
var middleName = "Kotlin";
var lastName = "Python";
console.log(flag);
console.log(pi);
console.log(firstName + " " + middleName + " " + lastName);
// Type Safety Issues -> Following three lines would give typescript issues
// pi = "Node";
// flag = 10;
// firstName = true;
// Demonstration of any type -> we would miss features of type safety with 'any'
var myName = "any data type";
console.log(myName);
myName = 15;
console.log(myName);
// Template String
console.log("\"Hi\" ".concat(firstName, " ").concat(middleName, " ").concat(lastName));
