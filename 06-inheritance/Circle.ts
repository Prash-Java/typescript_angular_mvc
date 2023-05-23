import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(private _theX:number, private _theY:number, private _theRadius:number){
        super(_theX,_theY);
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
    public set setRadius(r:number){
        this._theRadius = r;
    }
    public get getRadius():number {
        return this._theRadius;
    }

    public getCircleInfo():string {
        return super.getShapeInfo() + `,radius=${this._theRadius}`;
    }
}