class Point {
    x:number;
    y:number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        // console.log(`{ ${this.x}, ${this.y} }`)
    }
};

let drawPoint = (point: Point) => {
    console.log(point);
}

const p = new Point(1, 3);

drawPoint(p);