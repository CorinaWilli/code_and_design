

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0, 5);
  noFill();
  stroke(255);



  for (let i = 0; i < 10; i++) {

    //plan: y position ist abhängig von Distanz von Maus zu Mitte der Ellipse
    let distanz = dist(mouseX, mouseY, i * 200, height / 2);
    let yPos = map(distanz, 0, width, -300, 300);
    let durchmesser = map(distanz, 0, width, 300 / 50); // je näher desto Grösser


    fill (220, 0, 100, 5)
    ellipse(i * 200, height / 2 - yPos, distanz, distanz);

    
    fill(20, 50, 100, 5)
    rect(i * 200, height / 2 + yPos, distanz, 100);
  }
}