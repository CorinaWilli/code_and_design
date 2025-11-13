function setup() {
  createCanvas(600, 600)


}

function draw() {

  let inputValue = mouseX;

  let inputMin = 0;
  let inputMax = 600;

  let outputMin = 0;
  let outputMax = 255;


  let outputValue = map(inputValue, inputMin, inputMax, outputMin, outputMax)
  console.log(outputValue);




  background(outputValue);
}
