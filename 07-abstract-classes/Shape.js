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
    get getX() {
        return this._x;
    }
    set setX(value) {
        this._x = value;
    }
    get getY() {
        return this._y;
    }
    set setY(value) {
        this._y = value;
    }
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
