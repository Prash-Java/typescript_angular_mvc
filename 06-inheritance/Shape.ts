export class Shape {
    constructor(private _x : number, private _y : number){

    }

    //Accessors

    public set setX(x:number){
        this._x = x;
    }
    public get getX(): number {
        return this._x;
    }
    public set setY(y:number){
        this._y = y;
    }
    public get getY():number {
        return this._y;
    }

    public getShapeInfo():string {
        return `x=${this._x}, y=${this._y}`;
    }
}