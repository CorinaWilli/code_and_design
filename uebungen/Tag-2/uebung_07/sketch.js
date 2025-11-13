function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Kreis Stroke & onhe Füllung
  stroke(255);
  strokeWeight(1);
  noFill();


  if (mouseX > 300) {
    // Kreis bekommt Füllung
    fill(200, 0, 255);
    strokeWeight(10);
    ellipse(300, 200, 200, 200);
    ellipse(100, 100, 300, 300);

  }

  if (mouseX > 500) {
    // Kreis bekommt Füllung
    fill(200, 100, 255,80);
    strokeWeight(20);
    ellipse(400, 100, 300, 300);
    ellipse(1000, 100, 1000, 1000);

  }

 if (mouseX > 700) {
    
    fill(200, 255, 255, 20);
    strokeWeight(20);
    ellipse(900, 500, 20, 20);
    ellipse(1000, 900, 500, 500);

  }


  ellipse(300, 200, 100, 100);

}
