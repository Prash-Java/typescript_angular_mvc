"use strict";
/*
    tsc --build --clean
*/
var CustomerWithConstructorParameterProperties = /** @class */ (function () {
    function CustomerWithConstructorParameterProperties(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerWithConstructorParameterProperties.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerWithConstructorParameterProperties.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerWithConstructorParameterProperties;
}());
var myCustomer = new CustomerWithConstructorParameterProperties("Java", "Kotlin");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
