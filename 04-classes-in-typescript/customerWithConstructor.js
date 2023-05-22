"use strict";
// public, private, protected access modifiers
var CustomerWithConstructor = /** @class */ (function () {
    function CustomerWithConstructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return CustomerWithConstructor;
}());
var myConstructor = new CustomerWithConstructor("Kotlin", "Java");
console.log(myConstructor.firstName);
console.log(myConstructor.lastName);
