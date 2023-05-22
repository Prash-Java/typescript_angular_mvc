/*
    tsc --build --clean
*/
class CustomerWithConstructorParameterProperties {
    constructor(private _firstName:string, private _lastName:string){

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
let myCustomer = new CustomerWithConstructorParameterProperties("Java","Kotlin");
myCustomer.firstName = "Golang";
myCustomer.lastName = "Python";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
