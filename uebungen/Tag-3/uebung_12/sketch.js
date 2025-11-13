function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // in Klammer -> Initialisierung; Bedingung; Update
  for (let i = 0.5; i < 15; i++) {
    // anweisung
    console.log(i);
    ellipse(100 * i, height / 2, 50, 50)

  }

}
