var rainbow;
function setup() {
  createCanvas(windowWidth, windowHeight);

  rainbow = new Circle();

  ellipseMode(RADIUS);
  noFill();
}

function draw() {
  background(0);

  rainbow.renderCircles();
  rainbow.update();
}