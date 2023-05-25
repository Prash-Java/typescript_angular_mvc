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
    get getWidth() {
        return this._width;
    }
    set setWidth(value) {
        this._width = value;
    }
    get getHeight() {
        return this._height;
    }
    set setHeight(value) {
        this._height = value;
    }
    getInfo() {
        return super.getInfo() + `Width=${this._width}, Height=${this._height}`;
    }
    calculateArea() {
        return this._width * this._height;
    }
}
exports.Rectangle = Rectangle;
