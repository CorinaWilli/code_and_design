let groesseSlider;
let textRotationSlider;
let winkel = 0; // Startwinkel für Quadrat

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  // Slider für Quadratsgrösse
  groesseSlider = createSlider(50, max(windowWidth, windowHeight) * 1.2, 150);
  groesseSlider.position(20, 20);


  // Slider Text-Drehung
  textRotationSlider = createSlider(0, 360, 0);
  textRotationSlider.position(20, 60);
 
}

function draw() {
  background(10, 10, 10, 10);

  // Drehgeschwindigkeit
  let maxDist = dist(width / 2, height / 2, 0, 0);
  let aktuelleDist = dist(mouseX, mouseY, width / 2, height / 2);

  let speedFactor = map(aktuelleDist, 0, maxDist, 20, 0);
  winkel += speedFactor;

  // Text TURN 
  push();
  translate(width / 2, height / 2);
  rotate(-textRotationSlider.value());
  fill(255, 255, 255, 80);
  noStroke();
  textSize(width / 4);
  text('TURN', 0, 0);
  pop();

  // Quadrat
  let groesse = groesseSlider.value();

  // Farbverlauf
  let verlauf = drawingContext.createLinearGradient(-groesse / 2, -groesse / 2, groesse / 2, groesse / 2);
  verlauf.addColorStop(0, 'rgba(0, 130, 150, 0.2)');
  verlauf.addColorStop(1, 'rgba(255, 17, 0, 0.2)');
  drawingContext.fillStyle = verlauf;

  stroke(0, 0, 0, 100);
  strokeWeight(10);

  push();
  translate(width / 2, height / 2);
  rotate(winkel);
  rect(0, 0, groesse, groesse);
  pop();
}
