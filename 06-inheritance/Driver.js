"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(5, 10);
console.log(myShape.getShapeInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getCircleInfo());
let myRectangle = new Rectangle_1.Rectangle(0, 0, 10, 8);
console.log(myRectangle.getRectangleInfo());
