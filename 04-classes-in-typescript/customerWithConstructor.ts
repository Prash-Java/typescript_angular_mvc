// public, private, protected access modifiers
class CustomerWithConstructor {
    firstName : string;
    lastName : string

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myConstructor = new CustomerWithConstructor("Kotlin", "Java");
console.log(myConstructor.firstName);
console.log(myConstructor.lastName);