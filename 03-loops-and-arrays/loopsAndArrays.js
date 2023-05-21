// By default, each Typescript code gets converted into javascript at runtime, since browsers understand javascript
// tsc <fileName.ts> is the command to compile typescript file,
// node <fileName.js> is the command to execute the code
// 1. Simple loop
for (var i = 0; i <= 5; i++) {
    console.log(i + 1);
}
// Declaring & Initializing String Array
var mySports = ["Football", "Cricket", "Golf"];
for (var i = 0; i < mySports.length; i++) {
    console.log(mySports[i]);
}
// Similar to using For Each Loop in Kotlin & Java
for (var _i = 0, mySports_1 = mySports; _i < mySports_1.length; _i++) {
    var sport = mySports_1[_i];
    console.log(sport);
}
// Number Array Declaration & Initialisation
var reviews = [5, 4, 5, 4.5, 5];
var total = 0;
for (var _a = 0, reviews_1 = reviews; _a < reviews_1.length; _a++) {
    var review = reviews_1[_a];
    console.log(review);
}
// calculate average of reviews
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var averageReview = total / reviews.length;
console.log("Average Review: " + averageReview);
// Conditional Statements within for loop
for (var _b = 0, mySports_2 = mySports; _b < mySports_2.length; _b++) {
    var sport = mySports_2[_b];
    if (sport == 'Football') {
        console.log("Brazil");
    }
    else if (sport == "Cricket") {
        console.log("India");
    }
    else {
        console.log("Sport");
    }
}
// Growable/Dynamic Arrays -> Typescript provides dynamic arrays, similar to List interface implementation in Java & Kotlin
mySports.push("Baseball");
mySports.push("Tennis");
mySports.push("Hockey");
for (var _c = 0, mySports_3 = mySports; _c < mySports_3.length; _c++) {
    var sport = mySports_3[_c];
    console.log(sport);
}
