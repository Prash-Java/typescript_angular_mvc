"use strict";
/*
    Even if .ts file has error, and compilation error comes, still it creates .js file,
    So if we need to debug and fix the .ts file, it is always good idea to remove its corressponding .js file, if it exists,
    command 1-> remove .js file: rm CustomerWithConstructorAndAccessors.js
    command 2-> after debug & fixes, compile the .ts file: tsc --target ES5 --noEmitOnError CustomerWithConstructorAndAccessors.ts
    command 3-> execute the .js file generated in step 2 above: node CustomerWithConstructorAndAccessors.js
*/
var CustomerWithConstructorAndAccessors = /** @class */ (function () {
    function CustomerWithConstructorAndAccessors(_theFirstName, _theLastName) {
        this._firstName = _theFirstName;
        this._lastName = _theLastName;
    }
    Object.defineProperty(CustomerWithConstructorAndAccessors.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerWithConstructorAndAccessors.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerWithConstructorAndAccessors;
}());
var myCustomers = new CustomerWithConstructorAndAccessors("Java", "Kotlin");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
myCustomers.firstName = "Golang";
myCustomers.lastName = "Python";
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
