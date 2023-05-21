var CustomerWithAccessors = /** @class */ (function () {
    function CustomerWithAccessors() {
    }
    Object.defineProperty(CustomerWithAccessors.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (_firstValue) {
            this._firstName = _firstValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerWithAccessors.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (_lastValue) {
            this._lastName = _lastValue;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerWithAccessors;
}());
var myCustomer = new CustomerWithAccessors();
myCustomer.firstName = "Kotlin";
console.log("First Name: " + myCustomer.firstName);
myCustomer.lastName = "Java";
console.log("Last Name: " + myCustomer.lastName);
