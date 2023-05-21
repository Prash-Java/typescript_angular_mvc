class Customer {
    // Access Modifiers by default is "public", but we can specify it,
    firstName: String;
    lastName: String;
}

let myCustomer = new Customer();
myCustomer.firstName = "Kotlin";
myCustomer.lastName = "Java";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);