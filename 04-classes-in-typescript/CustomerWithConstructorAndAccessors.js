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
