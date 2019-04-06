var mic;
var maxh = 0;
var maxs = 0;
var maxb = 0;
var minh = 0;
var mins = 0;
var minb = 0;
var mode = 0;
var buttoncontrol = 0;

function setup() {

  resetSketch();
  var button = createButton("Reset");
	var button2 = createButton("Iris Rebelle");
	var button3 = createButton("Jealous");
  var button4 = createButton("Eraser");
  //var button3 = createButton("Angry");

  button.mousePressed(resetSketch);
	button2.mousePressed(warm);
	button3.mousePressed(calm);
  button4.mousePressed(eraser);
//  button3.mousePressed(angry);
}

function resetSketch(){
  createCanvas(windowWidth, windowHeight*0.9);
  background(0);
	maxh = 0;
	maxs = 0;
	maxb = 0;
  mic = new p5.AudioIn();
  mic.start();
}

function eraser(){
	if (mouseIsPressed){
		mode = 1;
	}
}

function draw() {
  var vol = mic.getLevel();
  fill(25);
  stroke(0,100,100);

  // ellipse(100,0,1,1);
  ellipse(windowWidth/2,windowHeight/2,vol*200,vol*200);
	ellipse(100,100,vol*200,vol*200);
	ellipse(300,300,vol*200,vol*200);
	ellipse(500,500,vol*200,vol*200);
  if (mouseIsPressed==true && mode==0){
	push();
	translate(mouseX, mouseY);
	rotate(frameCount / 50.0);
  noFill();
  stroke(maxh,maxs,maxb);
  strokeWeight(1.3);

  if (buttoncontrol == 0;){
  drawellipse();
  }
  if (buttoncontrol == 1;){
  drawtriangle();
  }


	maxh = Math.floor((Math.random()*maxh) + (minh + 120));
	maxs = Math.floor((Math.random()*maxs) + (mins + 70));
	maxb = Math.floor((Math.random()*maxb) + (minb + 70));
  console.log(vol);

}
	if (mode == 1){
	  fill(0);
		stroke(0,100,100);
  	strokeWeight(0.5);
  	//ellipse(mouseX,mouseY,20,20);
		if (mouseIsPressed == true){
	  	fill(0);
			strokeWeight(0);
			stroke(0,0,0);
			ellipse(mouseX,mouseY,20,20);
		}
	}
}
function drawellipse(){
  arc(50, 50, vol*1000, vol*1000, radians(0), radians(mouseX-10));
  stroke(maxh,maxs,maxb);
  arc(360,120,vol*2000,vol*2000,radians(0),radians(mouseX-20));
  stroke(maxh,maxs,maxb);
  arc(50,170,vol*1200,vol*1200,radians(0), radians(mouseX-30));
  stroke(maxh,maxs,maxb);
  arc(100,20,vol*600,vol*600,radians(0), radians(mouseX-40));
  stroke(maxh,maxs,maxb);
  arc(180,130,vol*800,vol*800,radians(0), radians(mouseX-50));
  stroke(maxh,maxs,maxb);
  arc(250,80,vol*500,vol*500,radians(0), radians(mouseX-60));
}


function warm() {
  buttoncontrol = 0;
	mode = 0;
	maxh = 0;
	maxs = 0;
	maxb = 0;
	minh = 100;
	mins = 0;
	minb = 0;
	maxh = Math.floor((Math.random()*120) + 180);
	maxs = Math.floor((Math.random()*30) + 50);
	maxb = Math.floor((Math.random()*20) + 50);
}

function calm() {
  buttoncontrol = 1;
	mode = 0;
	maxh = 0;
	maxs = 0;
	maxb = 0;
	minh = 0;
	mins = 0;
	minb = 100;
	maxh = Math.floor((Math.random()*120) + 60);
	maxs = Math.floor((Math.random()*125) + 50);
	maxb = Math.floor((Math.random()*255) + 50);
}
