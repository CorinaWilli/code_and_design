let posX = 0;
let posY = 0;
let bild

function preload() {
bild = loadImage("images/test.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

image(bild, 0, 0, windowWidth, windowHeight);
  background(255, 10);

  rect(posX, posY, windowWidth-100, windowHeight-100);
  fill(random(255), random(255), random(255), 80);

}

// Zufallswert für posY (Y Position)
if (frameCount % 10 == 0) {
  // frameCount
  // % Modulo -> zaehlt immer von 0 bis 9 
  // Verlangsamung der Bewegung -> nur jeder 10 Frame

}
// posY = random(-3, 3) // fuer 60Frames pro Sekunde

// Tastendruck zum Speichern des Bildschirminhalts
function keyPressed() {
if (key == 's' ) {
  saveCanvas("bildschirmfoto", "jpg");

}
}

