function setup() {
  //createCanvas(700,400);
  createCanvas(500, 500, WEBGL);
}

function draw() {
  if (mouseIsPressed) {
    fill('#efc3e6');
    } else {
      fill('#f0a6ca');
      }
 // triangle(30, 75, 58, 20, 86, 75);

 background(200);
 sphere(200);
 strokeWeight(3);
 stroke(255);
}