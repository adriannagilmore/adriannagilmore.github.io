function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  if (mouseIsPressed) {
    fill('#efc3e6');
    } else {
      fill('#f0a6ca');
      }

 background(200);
 sphere(200);
 strokeWeight(3);
 stroke(255);
}