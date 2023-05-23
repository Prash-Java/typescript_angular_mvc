import { Shape } from "./Shape";

export class Rectangle extends Shape{
    constructor(private _theX:number, private _theY:number, private _width:number, private _height:number){
        super(_theX, _theY);
    }

    //Accessors

    public set setX(x:number){
        this._theX = x;
    }
    public get getX(): number {
        return this._theX;
    }
    public set setY(y:number){
        this._theY = y;
    }
    public get getY():number {
        return this._theY;
    }
    public set setWidth(w:number){
        this._width = w;
    }
    public get getWidth():number {
        return this._width;
    }
    public set setHeight(h:number){
        this._height = h;
    }
    public get getHeight():number {
        return this._height;
    }

    public getRectangleInfo():string {
        return super.getShapeInfo() + `, width=${this._width}, height=${this._height}`;
    }
}