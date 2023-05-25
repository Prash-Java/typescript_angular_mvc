import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(private _theX:number, private _theY:number, private _width:number, private _height:number){
        super(_theX,_theY);
    }

    public get getWidth():number{
        return this._width; 
    }
    public set setWidth(value:number){
        this._width = value;
    }
    public get getHeight():number{
        return this._height;
    }
    public set setHeight(value:number){
        this._height = value;
    }
    getInfo(): string {
        return super.getInfo() + `Width=${this._width}, Height=${this._height}`;
    }
    calculateArea(): number {
        return this._width * this._height;
    }
}