let durchmesser;
durchmesser = 10;

let rotwert = 0;

  let r = random(255);
  let g = random(255);
  let b = random(255);


// let durchmesser = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 1);

  //console.log(rotwert)

  //mouseX
  //mouseY

  fill(0, mouseX, mouseY);
  rect(400, 400, 300, 300);

  fill(rotwert)
  ellipse(mouseX, mouseY, durchmesser, durchmesser);



}

function mouseClicked() {

  let gruenwert = 5;

  durchmesser = durchmesser + 1;

  //console.log(durchmesser)


}
/*function mousePressed(){
let r = random(255);
let g = random(255);
let b = random(255);

  //rotwert = rotwert +100
}
  */