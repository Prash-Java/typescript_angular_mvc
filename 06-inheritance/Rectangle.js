"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    _theX;
    _theY;
    _width;
    _height;
    constructor(_theX, _theY, _width, _height) {
        super(_theX, _theY);
        this._theX = _theX;
        this._theY = _theY;
        this._width = _width;
        this._height = _height;
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
    set setWidth(w) {
        this._width = w;
    }
    get getWidth() {
        return this._width;
    }
    set setHeight(h) {
        this._height = h;
    }
    get getHeight() {
        return this._height;
    }
    getRectangleInfo() {
        return super.getShapeInfo() + `, width=${this._width}, height=${this._height}`;
    }
}
exports.Rectangle = Rectangle;
