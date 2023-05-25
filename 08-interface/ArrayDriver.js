"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Java_1 = require("./Java");
const Python_1 = require("./Python");
const Kotlin_1 = require("./Kotlin");
let myJava = new Java_1.Java();
let myKotlin = new Kotlin_1.Kotlin();
let myPython = new Python_1.Python();
let myProgramming = [];
myProgramming.push(myKotlin);
myProgramming.push(myPython);
myProgramming.push(myJava);
for (let eachProgramming of myProgramming) {
    console.log(eachProgramming.majorConcepts());
    console.log();
}
