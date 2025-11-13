let winkel = 0; // Startwinkel für Quadrat
let threshold = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 0, 0, 10);

  // Drehgeschwindigkeit
  let maxDist = dist(width / 2, height / 2, 0, 0);
  let aktuelleDist = dist(mouseX, mouseY, width / 2, height / 2);

  let speedFactor = map(aktuelleDist, 0, maxDist, 20, -2);
  winkel += speedFactor;


  let zentrifugalKraft = map(aktuelleDist, 0, maxDist, 255, 1);
  zentrifugalKraft = random(50);


  let alpha = map(aktuelleDist, 0, maxDist, 240, 1);


  // Kreis rot gegenuhrzeigersinn
  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  noStroke();
  fill(100, 0, 0, alpha);
  ellipse(240, 45, 80, 80);
  pop();

  // Kreis rot uhrzeigersinn
  push();
  translate(width / 2, height / 2);
  rotate(-winkel);
  noStroke();
  fill(100, 0, 0, alpha);
  ellipse(240, 45, 80, 80);
  pop();

  // Kreis blaugrün
  push();
  translate(width / 2, height / 2);
  rotate(-winkel - 100);
  noStroke();
  fill(0, 100, 100, alpha - 20);
  ellipse(100, 100, 135, 135);
  pop();

  // Kreis blaugrün
  push();
  translate(width / 2, height / 2);
  rotate(winkel - 100);
  noStroke();
  fill(180, 180, 100, alpha - 50);
  ellipse(100, 100, 135, 135);
  pop();

  // Kreis weiss
  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, 30);
  strokeWeight(2);
  ellipse(30, 0, 130, 130);
  pop();

  // Kreis weiss gross
  push();
  translate(width / 2, height / 2);
  rotate(-winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, 30);
  strokeWeight(2);
  ellipse(20, 0, 400, 400);
  pop();

  // Kreis weiss mittel
  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, 30);
  strokeWeight(4);
  ellipse(-80, 0, 200, 200);
  pop();


  //plan: ab einer gewissen Nähe entsteht eine neue Form, die rotiert
  if (aktuelleDist < threshold) {
    push();
    translate(width / 2, height / 2);
    rotate(-winkel);
    noStroke();
    fill(100, 10, 100, alpha);
    ellipse(10, 0, 50, 50);
    pop();
  }

  if (aktuelleDist < threshold) {
    push();
    translate(width / 2, height / 2);
    rotate(winkel);
    noStroke();
    fill(0, 100, 100, alpha);
    ellipse(700, 0, 600, 600);
    pop();
  }

  if (aktuelleDist < threshold) {
    push();
    translate(width / 2, height / 2);
    rotate(-winkel);
    noStroke();
    fill(80, 50, 80, alpha);
    ellipse(700 + zentrifugalKraft, 0, 600, 600);
    pop();
  }

  if (aktuelleDist < threshold) {
    push();
    translate(width / 2, height / 2);
    rotate(winkel);
    fill(255, 255, 255, 0);
    stroke(255, 255, 255, alpha);
    strokeWeight(2);
    ellipse(-60, 60, 600, 600);
    pop();
  }

}
