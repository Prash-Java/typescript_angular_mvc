/*
Here we use Accessors get and set, and for this we provide --target ES5 during compilation on terminal, in this way:
tsc --target ES5 --noEmitOnError CustomerWithAccessors.ts
node CustomerWithAccessors.js
*/

class CustomerWithAccessors {
    private _firstName:string;
    private _lastName:string;

    public get firstName():string {
        return this._firstName;
    }

    public set firstName(_firstValue:string) {
        this._firstName = _firstValue;
    }

    public get lastName():string {
        return this._lastName;
    }

    public set lastName(_lastValue:string) {
        this._lastName = _lastValue;
    }
}

let myCustomer = new CustomerWithAccessors();
myCustomer.firstName = "Kotlin";
console.log("First Name: " + myCustomer.firstName);
myCustomer.lastName = "Java";
console.log("Last Name: " + myCustomer.lastName);