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