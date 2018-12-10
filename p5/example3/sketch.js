function setup() {
  createCanvas(1000,500);
  //slow down the frameRate to make it more visible
  frameRate(10);
}

function draw() {
  background(142, 220, 230);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);

  if (mouseIsPressed) {
    background(229, 164,  203);
    line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouseX + ' -> ' + mouseX);
  }
}

