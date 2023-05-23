import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape= new Shape(5,10);
console.log(myShape.getShapeInfo());

let myCircle = new Circle(5,10,20);
console.log(myCircle.getCircleInfo());

let myRectangle = new Rectangle(0,0,10,8);
console.log(myRectangle.getRectangleInfo());