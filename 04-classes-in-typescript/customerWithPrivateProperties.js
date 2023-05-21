var CustomerWithPrivateProperties = /** @class */ (function () {
    function CustomerWithPrivateProperties() {
    }
    CustomerWithPrivateProperties.prototype.setFirstName = function (firstValue) {
        this.firstName = firstValue;
    };
    CustomerWithPrivateProperties.prototype.getFirstName = function () {
        return this.firstName;
    };
    CustomerWithPrivateProperties.prototype.setLastName = function (lastValue) {
        this.lastName = lastValue;
    };
    CustomerWithPrivateProperties.prototype.getLastName = function () {
        return this.lastName;
    };
    return CustomerWithPrivateProperties;
}());
var myCustomerEntity = new CustomerWithPrivateProperties();
myCustomerEntity.setFirstName("Java");
console.log("\"First Name\" ".concat(myCustomerEntity.getFirstName()));
myCustomerEntity.setLastName("Kotlin");
console.log("\"Last Name\" ".concat(myCustomerEntity.getLastName()));
