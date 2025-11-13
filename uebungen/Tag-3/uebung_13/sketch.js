
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0, 50);
  noFill();
  stroke(255);


  for (let i = 0; i < 10; i++) {

    ellipse(i * 200, height / 2, 200, 200);
  }
}
