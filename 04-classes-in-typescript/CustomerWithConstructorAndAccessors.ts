/*
    Even if .ts file has error, and compilation error comes, still it creates .js file,
    So if we need to debug and fix the .ts file, it is always good idea to remove its corressponding .js file, if it exists,
    command 1-> remove .js file: rm CustomerWithConstructorAndAccessors.js
    command 2-> after debug & fixes, compile the .ts file: tsc --target ES5 --noEmitOnError CustomerWithConstructorAndAccessors.ts
    command 3-> execute the .js file generated in step 2 above: node CustomerWithConstructorAndAccessors.js
*/

class CustomerWithConstructorAndAccessors {
    private _firstName : string;
    private _lastName : string;

    constructor(_theFirstName:string, _theLastName:string){
        this._firstName = _theFirstName;
        this._lastName = _theLastName;
    }

    public get firstName():string {
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName = value;
    }

    public get lastName():string {
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName = value;
    }
}

let myCustomers = new CustomerWithConstructorAndAccessors("Java","Kotlin");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
myCustomers.firstName = "Golang";
myCustomers.lastName = "Python";
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);