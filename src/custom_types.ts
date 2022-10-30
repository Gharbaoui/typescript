class Point {
    private x:number;
    private y:number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`{ ${this.x}, ${this.y} }`)
    }
};

const p = new Point(1, 3);
p.draw();