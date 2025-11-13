function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0,0, 10);
  //plan: Durchmesser der Ellipse abhängig von Distanz der Maus

  let durchmesser;
  //
  let distanz = dist(mouseX, mouseY, width / 2, height / 2)
durchmesser = map (distanz, 0, width / 2, 10, 1000);

fill(255, 20, 150, 40)
  ellipse(width / 2, height / 2, durchmesser, durchmesser);
}
