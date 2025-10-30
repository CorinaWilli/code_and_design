let groesseSlider;
let winkelQuadrat = 0;
let winkelText = 0;
let maxDist;
let aktuelleDist;
let speedQuadrat;
let speedText;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  // Slider für Quadratsgrösse
  groesseSlider = createSlider(50, max(windowWidth, windowHeight) * 1.2, 150);
  groesseSlider.position(20, 20);
  groesseSlider.style('width', '200px');
  groesseSlider.style('accent-color', '#FF7B00');
}

function draw() {
  background(20);

  // Geschwindigkeit basierend auf Mausposition
  maxDist = dist(width / 2, height / 2, 0, 0);
  aktuelleDist = dist(mouseX, mouseY, width / 2, height / 2);

  // Geschwindigkeit Quadrat und Text
  speedQuadrat = map(aktuelleDist, 0, maxDist, 6, 0);
  speedText = map(aktuelleDist, 0, maxDist, 0, 2);

  winkelQuadrat -= speedQuadrat; // Quadrat Gegenuhrzeigersinn
  winkelText += speedText;        // Text Uhrzeigersinn

  // Text
  push();
  translate(width / 2, height / 2);
  rotate(winkelText);
  fill(255, 120, 0, 200); // Orange leicht transparent
  textSize(width / 5.5);
  text('TURN', 0, 0);
  pop();

  // Quadrat
  let groesse = groesseSlider.value();

  let verlauf = drawingContext.createLinearGradient(-groesse / 2, -groesse / 2, groesse / 2, groesse / 2);
  verlauf.addColorStop(0, 'rgba(90,0,150,0.8)');
  verlauf.addColorStop(1, 'rgba(255,120,0,0.8)');
  drawingContext.fillStyle = verlauf;

  noStroke();
  push();
  translate(width / 2, height / 2);
  rotate(winkelQuadrat);
  rect(0, 0, groesse, groesse);
  pop();
}
