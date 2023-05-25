import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let theCircle = new Circle(1,1,7);
let theRectangle = new Rectangle(2,2,100,50);

let theShapes:Shape[]=[];
theShapes.push(theCircle);
theShapes.push(theRectangle);

for(let shape of theShapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}