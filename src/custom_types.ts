class Point {
    constructor(private _x:number, private _y:number) {
    }
    draw() {
        console.log(`{ ${this._x}, ${this._y} }`)
    }

    get x()
    {
        return this._x;
    }

    set x(val:number)
    {
        if (val < 0)
            throw new Error(`value can not be less than 0`);
        this._x = val;
    }
};

const p = new Point(1, 3);
p.x = 23;
console.log(p.x);
p.draw();