import { Programming } from "./Programming";
import { Java } from "./Java";
import { Python } from "./Python";
import { Kotlin } from "./Kotlin";

let myJava = new Java();
let myKotlin = new Kotlin();
let myPython = new Python();

let myProgramming:Programming[]=[];
myProgramming.push(myKotlin);
myProgramming.push(myPython);
myProgramming.push(myJava);

for(let eachProgramming of myProgramming){
    console.log(eachProgramming.majorConcepts());
    console.log();
}