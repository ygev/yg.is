var mic;
var cRed = 0;
var cGreen = 0;
var cBlue = 0;
var redC = 0;
var greenC = 0;
var blueC = 0;

function setup() {

  resetSketch();
  var button = createButton("Reset");
	var button2 = createButton("Warm");
	var button3 = createButton("Calm");
  //var button3 = createButton("Angry");

  button.mousePressed(resetSketch);
	button2.mousePressed(warm);
	button3.mousePressed(calm);
//  button3.mousePressed(angry);
}

function resetSketch(){
  createCanvas(windowWidth, windowHeight*0.9);
  background(0);
	cRed = 0;
	cGreen = 0;
	cBlue = 0;
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var vol = mic.getLevel();
  fill(25);
	stroke(169,181,177);

  // ellipse(100,0,1,1);
  ellipse(windowWidth/2,windowHeight/2,vol*200,vol*200);
	ellipse(100,100,vol*200,vol*200);
	ellipse(300,300,vol*200,vol*200);
	ellipse(500,500,vol*200,vol*200);
  if (mouseIsPressed){
	push();
	translate(mouseX, mouseY);
	rotate(frameCount / 50.0);
  noFill();
  stroke(cRed,cGreen,cBlue);
  strokeWeight(1);
  arc(50, 50, vol*1000, vol*1000, radians(0), radians(mouseX-10));
  stroke(cRed,cGreen,cBlue);
  arc(360,120,vol*2000,vol*2000,radians(0),radians(mouseX-20));
  stroke(cRed,cGreen,cBlue);
  arc(50,170,vol*1200,vol*1200,radians(0), radians(mouseX-30));
  stroke(cRed,cGreen,cBlue);
  arc(100,20,vol*600,vol*600,radians(0), radians(mouseX-40));
  stroke(cRed,cGreen,cBlue);
  arc(180,130,vol*800,vol*800,radians(0), radians(mouseX-50));
  stroke(cRed,cGreen,cBlue);
  arc(250,80,vol*500,vol*500,radians(0), radians(mouseX-60));
	cRed = Math.floor((Math.random()*cRed) + (redC + 50));
	cGreen = Math.floor((Math.random()*cGreen) + (greenC + 50));
	cBlue = Math.floor((Math.random()*cBlue) + (blueC + 50));
  console.log(vol);
	//console.log(cRed);
}
}

function warm() {
	cRed = 0;
	cGreen = 0;
	cBlue = 0;
	redC = 100;
	greenC = 0;
	blueC = 0;
	cRed = Math.floor((Math.random()*255) + 150);
	cGreen = Math.floor((Math.random()*125) + 50);
	cBlue = Math.floor((Math.random()*125) + 50);
}

function calm() {
	cRed = 0;
	cGreen = 0;
	cBlue = 0;
	redC = 0;
	greenC = 0;
	blueC = 100;
	cRed = Math.floor((Math.random()*125) + 150);
	cGreen = Math.floor((Math.random()*125) + 50);
	cBlue = Math.floor((Math.random()*255) + 50);
}
