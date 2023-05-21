/* Typescript compiler always creates .js file, even if there are errors in .ts file
 To stop this, we can add the property --noEmitOnError while compilation of .ts file, tsc --noEmitOnError <fileName.ts>
 If there are no errors in .ts file, it will create .js file at runtime, else it wont,
 */
class CustomerWithPrivateProperties {
    private firstName : string;
    private lastName : string;

    public setFirstName(firstValue:string):void {
        this.firstName = firstValue;
    }

    public getFirstName():string{
        return this.firstName;
    }

    public setLastName(lastValue:string):void {
        this.lastName = lastValue;
    }

    public getLastName():string {
        return this.lastName;
    } 
}

let myCustomerEntity = new CustomerWithPrivateProperties();
myCustomerEntity.setFirstName("Java");
console.log(`"First Name" ${myCustomerEntity.getFirstName()}`);
myCustomerEntity.setLastName("Kotlin");
console.log(`"Last Name" ${myCustomerEntity.getLastName()}`);