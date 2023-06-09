"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    _theX;
    _theY;
    _radius;
    constructor(_theX, _theY, _radius) {
        super(_theX, _theY);
        this._theX = _theX;
        this._theY = _theY;
        this._radius = _radius;
    }
    get getRadius() {
        return this._radius;
    }
    set setRadius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `radius=${this._radius}`;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
exports.Circle = Circle;
