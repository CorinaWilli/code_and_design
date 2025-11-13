let posX = 0;
let posY = 0;
let fill = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 15);
  stroke(255, 50);
  strokeWeight(2);

  rect(posX, height / 2 + posY, windowWidth, 10);
  fill(random(255), random(255), random(255), 40);

  ellipse(400, height / 2 + posY, 200, 200);
  fill(random(150), random(0), random(0), 90);

  ellipse(500, height / 2 + posY, 200, 200);
  fill(random(255), random(255), random(255), 40);

  ellipse(600, height / 2 + posY, 200, 200);
  fill(random(150), random(0), random(0), 90);

  ellipse(700, height / 2 + posY, 200, 200);
  fill(random(255), random(255), random(255), 40);
}



// Zufallswert für posY (Y Position)
if (frameCount % 10 == 0) {
  // frameCount
  // % Modulo -> zaehlt immer von 0 bis 9 
  // Verlangsamung der Bewegung -> nur jeder 10 Frame
  fill = random((255), random(255), random(255), 40);
}
// posY = random(-3, 3) // fuer 60Frames pro Sekunde



/*
Varianten der IF Schreibweisen (Bewegung)
 
exakt gleich posX==windowWith-50 (minus rect width)
kleiner als posX < windowWith-50
groesser als posX > windowWith-50
kleiner oder gleich posX<= windowWith-50 (wahr, falls posX windowWith-50 ist)
groesser oder gleich posX>= windowWith-50
ungleich posX != windowWith-50 (trifft immer zu, ausser posX hat den Wert von windowWith-50)
 
*/


