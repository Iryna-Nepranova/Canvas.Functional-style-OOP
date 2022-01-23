function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function() {
        console.log("Я рисую фигуру")
    }
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color)
    this.x2 = x2;
    this.y2 = y2
    this.draw = function(context) {
        let ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color)
    this.w = w;
    this.h = h;
    this.draw = function(context) {
        const ctx = context.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

}

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color)
    this.r = r;
    this.draw = function(context) {
        const ctx = context.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
}

function Canvas(id) {
    this.canvas = document.getElementById(id);

    this.add = function() {
        this.canvas = document.getElementById(id);
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}

let drawArea = new Canvas('canvasID');

for (let count = 0, x1 = 0, x2 = 30; x1 < 500; count++, x1 += 30, x2 += 30) {
    if (count % 2) drawArea.add(new Line(x1, 30, x2, 0, 'blue'));
    else drawArea.add(new Line(x1, 0, x2, 30, 'blue'));
}

let line1 = new Line(340, 200, 150, 340, 'blue');
let line2 = new Line(350, 210, 160, 350, 'red');
let rect1 = new Rect(250, 50, 150, 50, 'rgba(0,0,255,0.6)');
let rect2 = new Rect(270, 60, 70, 130, 'rgb(0,255,0,0.5)');
let rect3 = new Rect(370, 70, 50, 60, 'rgba(255,255,0,0.4)');
let circle1 = new Circle(100, 100, 50, 'rgba(0, 0, 128, 0.3) ');
let circle2 = new Circle(150, 190, 100, 'rgba(0,255,255,0.5)');

drawArea.add(line1);
drawArea.add(line2);
drawArea.add(rect1);
drawArea.add(rect2);
drawArea.add(rect3);
drawArea.add(circle1);
drawArea.add(circle2);