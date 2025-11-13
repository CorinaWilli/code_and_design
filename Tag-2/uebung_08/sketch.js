let drehwinkel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

}

function draw() {
  background(255, 255, 255, 30);

  push();
  // Koordinatensystem verschieben -> push
  translate(width / 2, height / 2);
  rotate(drehwinkel * 2);

  fill(255, 255, 0, 50);
  noStroke();
  rect(0, 0, 500, 500);

  pop();
  // Koordinatensystem zurück gesetzt -> pop

  push();
  // Koordinatensystem verschieben -> push
  translate(width / 2, height / 2);
  rotate(-drehwinkel * 1.5);

  fill(255, 30, 0, 50);
  noStroke();
  rect(0, 0, 550, 550);


  pop();
  // Koordinatensystem zurück gesetzt -> pop


  drehwinkel = drehwinkel + 1;


}
