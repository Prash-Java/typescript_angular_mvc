"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
class Customers {
    _firstName;
    _lastName;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
exports.Customers = Customers;
