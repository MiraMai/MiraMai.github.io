function Circle(centerX, centerY, radius) {
  this.centerX = centerX;
  this.centerY = centerY;
  this.radius = radius;
}

let C = new Circle(6, 9, 3);
console.log(C);

function Triangle(x1, y1, x2, y2, x3, y3) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;
}
let T = new Triangle(12, 10, 14, 14, 17, 10);
console.log(T);
