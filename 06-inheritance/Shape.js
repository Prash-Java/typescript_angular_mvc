"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    _x;
    _y;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    //Accessors
    set setX(x) {
        this._x = x;
    }
    get getX() {
        return this._x;
    }
    set setY(y) {
        this._y = y;
    }
    get getY() {
        return this._y;
    }
    getShapeInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
