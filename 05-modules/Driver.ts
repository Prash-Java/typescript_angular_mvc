/* 
    For import statements to work in modules, we better execute the CLI command starting with ts-node and not only node,
    command to install: npm install -g ts-node
*/

import { Customers } from "./Customers";

let myCustomers = new Customers("Java","Kotlin");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
