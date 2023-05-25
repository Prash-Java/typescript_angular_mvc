import { Shape } from "./Shape";

export class Circle extends Shape{
    constructor(private _theX:number, private _theY:number, private _radius:number){
        super(_theX,_theY);
    }

    public get getRadius():number{
        return this._radius;
    }
    public set setRadius(value:number){
        this._radius = value;
    }

    public getInfo(): string {
        return super.getInfo() + `radius=${this._radius}`;
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
    }
}