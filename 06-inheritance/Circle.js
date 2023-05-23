"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    _theX;
    _theY;
    _theRadius;
    constructor(_theX, _theY, _theRadius) {
        super(_theX, _theY);
        this._theX = _theX;
        this._theY = _theY;
        this._theRadius = _theRadius;
    }
    //Accessors
    set setX(x) {
        this._theX = x;
    }
    get getX() {
        return this._theX;
    }
    set setY(y) {
        this._theY = y;
    }
    get getY() {
        return this._theY;
    }
    set setRadius(r) {
        this._theRadius = r;
    }
    get getRadius() {
        return this._theRadius;
    }
    getCircleInfo() {
        return super.getShapeInfo() + `,radius=${this._theRadius}`;
    }
}
exports.Circle = Circle;
