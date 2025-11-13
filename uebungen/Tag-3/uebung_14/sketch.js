//Slider für Hintergrundfarbe
let sliderFarbe;

//Slider für Eckenradius
let sliderEcken;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  //Slider mit Bereich und Startwert
  sliderFarbe = createSlider(0, 100, 0);
  sliderFarbe.position(20, 50);

  sliderEcken = createSlider(0, 15, 0);
  sliderEcken.position(20, 100);

}

function draw() {

  //Aktuelle Werte der Slider lesen
  let farbe = sliderFarbe.value();
  let radius = sliderEcken.value();

  //Hintergrundfarbe von Schwarz zu Weiss mappen
  let grau = map(farbe, 0, 100, 0, 255);
  background(grau);

  //Abstand der Maus zur Mitte
  let abstandX = (mouseX - width / 2) / 10;
  let abstandY = (mouseY - height / 2) / 10;

  //Farben der Formen definieren
  let blau = color(0, 200, 255);
  let pink = color(230, 0, 130);

  for (let i = 0; i < 6; i++) {

    let faktor = 6 - i;
    if (i % 2 == 0) {
      fill(blau);
    } else {
      fill(pink);
    }

    fill(blau);
    rect(width / 2 + abstandX * i, height / 2 + abstandY * i, faktor * 50, faktor * 50, radius);



  }

  /*let xPos = width / 2 + abstandX * i;
  let yPos = height / 2 + abstandY * i;
  let size = 300 - i * 50;

  rect(xPos, yPos, size, size, radius);

  //Formen in wechselnder Farbe gelistet
 /* fill(blau);
  rect(width / 2, height / 2, 300, 300, radius);

  fill(pink);
  rect(width / 2 + abstandX * 1, height / 2 + abstandY * 1, 250, 250, radius);

  fill(blau);
  rect(width / 2 + abstandX * 2, height / 2 + abstandY * 2, 200, 200, radius);

  fill(pink);
  rect(width / 2 + abstandX * 3, height / 2 + abstandY * 3, 150, 150, radius);

  fill(blau);
  rect(width / 2 + abstandX * 4, height / 2 + abstandY * 4, 100, 100, radius);

  fill(pink);
  rect(width / 2 + abstandX * 5, height / 2 + abstandY * 5, 50, 50, radius);
*/

  //Beschriftungen der Slider
  if (grau < 128) {
    fill(255); // heller Text auf dunklem Hintergrund
  } else {
    fill(0);   // dunkler Text auf hellem Hintergrund
  }

  textSize(12);
  text('Hintergrundfarbe', 160, 62);
  text('Eckenradius', 160, 112);


}
//Canvas an die Fenstergrösse anpassen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
