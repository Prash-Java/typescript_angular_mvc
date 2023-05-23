"use strict";
/*
    For import statements to work in modules, we better execute the CLI command starting with ts-node and not only node,
    command to install: npm install -g ts-node
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Customers_1 = require("./Customers");
let myCustomers = new Customers_1.Customers("Java", "Kotlin");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
