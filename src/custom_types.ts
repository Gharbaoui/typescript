class Point {
    constructor(private x:number, private y:number) {
    }
    draw() {
        console.log(`{ ${this.x}, ${this.y} }`)
    }
};

const p = new Point(1, 3);
p.draw();