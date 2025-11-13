let winkel = 0; // Startwinkel für Quadrat
let threshold = 400; // Hinzufügen der weiteren Elemente

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 0, 20, 15);

  // Drehgeschwindigkeit mit Steuerung Maus
  let maxDist = dist(width / 2, height / 2, 0, 0);
  let aktuelleDist = dist(mouseX, mouseY, width / 2, height / 2);

  let speedFactor = map(aktuelleDist, 0, maxDist, 90, -10);
  winkel += speedFactor;

  let zentrifugalKraft = map(aktuelleDist, 0, maxDist, 255, 1);
  zentrifugalKraft = random(90);

  // Deckkraft mit Steuerung Maus
  let alpha = map(aktuelleDist, 0, maxDist, 255, 20);

  // Kreis weiss 1
  push();
  translate(width / 2, height / 2);
  rotate(-winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, alpha);
  strokeWeight(1.5);
  ellipse(20, 0, 400, 400);
  pop();

  // Kreis weiss 2
  push();
  translate(width / 2, height / 2);
  rotate(-winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, alpha);
  strokeWeight(1.5);
  ellipse(-20, 0, 400, 400);
  pop();

  // Kreis weiss 3
  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, alpha);
  strokeWeight(3);
  ellipse(-90, 0, 200, 200);
  pop();

  // Kreis weiss 4
  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, alpha);
  strokeWeight(3);
  ellipse(90, 0, 200, 200);
  pop();

  // Kreis weiss 5
  push();
  translate(width / 2, height / 2);
  rotate(-winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, alpha);
  strokeWeight(1.5);
  ellipse(-30, 0, 1600, 1600);
  pop();

  // Kreis weiss 6
  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  fill(255, 255, 255, 0);
  stroke(255, 255, 255, alpha);
  strokeWeight(1.5);
  ellipse(-30, 0, 1200, 1200);
  pop();


  //plan: ab einer gewissen Nähe entstehen neue rotierende Elemente
  // Kreis  verschoben lila
  if (aktuelleDist < threshold) {
    push();
    translate(width / 4, height / 4);
    rotate(winkel);
    noStroke();
    fill(100, 10, 100, 15);
    ellipse(zentrifugalKraft, 0, 600, 600);
    pop();
  }

  // Kreis rechte untere Ecke 
  if (aktuelleDist < threshold) {
    push();
    translate(width, height);
    rotate(-winkel);
    noStroke();
    fill(150, 20, 200, 8);
    ellipse(zentrifugalKraft, 0, 900, 900);
    pop();
  }

  // Kreis orange links
  if (aktuelleDist < threshold) {
    push();
    translate(width / 3, height / 2);
    rotate(-winkel);
    noStroke();
    fill(240, 100, 10, 8);
    ellipse(zentrifugalKraft + 30, 0, 400, 400);
    pop();
  }

  // Kreis orange rechts
  if (aktuelleDist < threshold) {
    push();
    translate(width / 1.2, height / 1.9);
    rotate(winkel);
    noStroke();
    fill(255, 120, 10, 7);
    ellipse(zentrifugalKraft + 30, 0, 450, 450);
    pop();
  }

// Kreis weiss noFill
  if (aktuelleDist < threshold) {
    push();
    translate(width / 2, height / 2);
    rotate(winkel);
    fill(255, 255, 255, 0);
    stroke(255, 255, 255, alpha);
    strokeWeight(2);
    ellipse(-100, 60, 600, 600);
    pop();
  }

}
