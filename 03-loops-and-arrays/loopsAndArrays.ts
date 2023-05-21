// By default, each Typescript code gets converted into javascript at runtime, since browsers understand javascript
// tsc <fileName.ts> is the command to compile typescript file,
// node <fileName.js> is the command to execute the code

// 1. Simple loop
for(let i=0;i<=5;i++){
    console.log(i+1);
}

// Declaring & Initializing String Array
let mySports: string[] = ["Football", "Cricket", "Golf"];

for(let i=0;i<mySports.length;i++){
    console.log(mySports[i]);
}

// Similar to using For Each Loop in Kotlin & Java, here it is called simplified for loop
for(let sport of mySports){
    console.log(sport);
}

// Number Array Declaration & Initialisation
let reviews: number[] = [5, 4, 5, 4.5, 5];
let total: number = 0;
for(let review of reviews){
    console.log(review);
}
// calculate average of reviews
for(let i=0;i<reviews.length;i++){
    total += reviews[i];
}
let averageReview: number = total/reviews.length;
console.log("Average Review: " + averageReview);

// Conditional Statements within for loop
for(let sport of mySports){
    if(sport == 'Football'){
        console.log("Brazil");
    }
    else if(sport == "Cricket"){
        console.log("India");
    }
    else {
        console.log("Sport");
    }
}

/* Growable/Dynamic Arrays -> Typescript provides dynamic arrays, similar to List interface implementation in Java & Kotlin
 mySports.pop("Tennis") would remove this element from dynamic array, it is similar to implementing Stack Interface 
 with ArrayDeque class, using push and pop methods in Java, when implementing our own Stack data structure,
*/
mySports.push("Baseball");
mySports.push("Tennis");
mySports.push("Hockey");

for(let sport of mySports){
    console.log(sport);
}