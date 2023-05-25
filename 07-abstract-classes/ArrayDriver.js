"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let theCircle = new Circle_1.Circle(1, 1, 7);
let theRectangle = new Rectangle_1.Rectangle(2, 2, 100, 50);
let theShapes = [];
theShapes.push(theCircle);
theShapes.push(theRectangle);
for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
