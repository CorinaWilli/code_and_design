let posX = 0;
let posY = 0;

let treshold = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 20);

  if (posX < treshold) {
    // Farbe vor der posX 120
    fill(255, 0, 50);

  } else {
    // Farbe nach der posX 120
    fill(50, 0, 255)
  }

  // Zufallswert für posY (Y Position)
  if (frameCount % 10 == 0) {
    // frameCount
    // % Modulo -> zaehlt immer von 0 bis 9 
    // Verlangsamung der Bewegung -> nur jeder 10 Frame
    posY = random(-60, 60)
  }
// posY = random(-3, 3) // fuer 60Frames pro Sekunde

  rect(posX, height / 2 + posY, 50, 50);


  /*
  Varianten der IF Schreibweisen (Bewegung)
  
  exakt gleich posX==windowWith-50
  kleiner als posX < windowWith-50
  groesser als posX > windowWith-50
  kleiner oder gleich posX<= windowWith-50 (wahr, falls posX windowWith-50 ist)
  groesser oder gleich posX>= windowWith-50
  ungleich posX != windowWith-50 (trifft immer zu, ausser posX hat den Wert von windowWith-50)
  
  */




  if (posX < windowWidth - 50) {
    // falls die Bedingung zutrifft

    posX = posX + 1; // posX++

    // if (posX == windowWidth - 50) {
    // falls die Bedingung zutrifft
    // noLoop(); // einfache Variante ->stoppt gesamter Sketch
  }
}
