var mic;
var maxh = 0; //color settings//
var maxs = 0;
var maxb = 0;
var minh = 0;
var mins = 0;
var minb = 0;
var mode = 0; // control eraser //
var buttoncontrol = 0; // buttons which control brushes changing //

function setup() {

  resetSketch();
  var button = createButton("Reset");
	var button2 = createButton("Enthusiasm");
	var button3 = createButton("Jealous");
  var button4 = createButton("Confident");
  var button5 = createButton("Eraser Black");
  var button6 = createButton("Eraser White");
  button.mousePressed(resetSketch);
	button2.mousePressed(enthusiasm);
	button3.mousePressed(jealous);
  button4.mousePressed(confident);
  button5.mousePressed(eraserBlack);
  button6.mousePressed(eraserWhite);
}

function resetSketch(){
  createCanvas(windowWidth, windowHeight*0.9);
  background(0,0,0);
  //background(0);
  buttoncontrol = 0;
	maxh = 0;
	maxs = 0;
	maxb = 0;
  mic = new p5.AudioIn();
  mic.start();
}

function eraserBlack(){
	if (mouseIsPressed){
		mode = 1;
	}
}

function eraserWhite(){
	if (mouseIsPressed){
		mode = 2;
	}
}

function draw() {
  noStroke();
  colorMode(HSB);
  textSize(15);
  fill(300,0,70);
  text('Black background - Press1', 10, 30);
  text('White background - Press2', 10, 50);
  //stroke(maxh,maxs,maxb);
  if (keyIsPressed == true){
    if(key == '1'){background(0,0,0);}
    else if (key == '2') {background(255);
    }
  }

  var vol = mic.getLevel();
  stroke(0,100,100);
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
  if (buttoncontrol == 0){
  drawellipse();
  }
  if (buttoncontrol == 1){
  drawtriangle();
  }
  if (buttoncontrol == 2){
  drawrectangle();
  }
	maxh = Math.floor((Math.random()*maxh) + (minh + 50));
	maxs = Math.floor((Math.random()*maxs) + (mins + 30));
	maxb = Math.floor((Math.random()*maxb) + (minb + 50));
  // get a new color setting of each element
  // which based on the formal one
  console.log(vol);

}
	if (mode == 1){
	  fill(0);
		stroke(0,100,100);
  	strokeWeight(0.5);
		if (mouseIsPressed == true){
	  	fill(0);
			strokeWeight(0);
			stroke(0,0,0);
			ellipse(mouseX,mouseY,70,70);
		}
    }

    if (mode == 2){
  	  fill(255);
  		stroke(0,100,100);
    	strokeWeight(0.5);
  		if (mouseIsPressed == true){
  	  	fill(255);
  			strokeWeight(0);
  			stroke(0,0,0);
  			ellipse(mouseX,mouseY,70,70);
  		}
	}
}

function drawellipse(){
  var vol = mic.getLevel();
  arc(50, 50, vol*2000, vol*2000, radians(0), radians(mouseX-10));
  stroke(maxh,maxs,maxb);
  arc(360,120,vol*3000,vol*3000,radians(0),radians(mouseX-20));
  stroke(maxh,maxs,maxb);
  arc(50,170,vol*4200,vol*4200,radians(0), radians(mouseX-30));
  stroke(maxh,maxs,maxb);
  arc(100,20,vol*6000,vol*6000,radians(0), radians(mouseX-40));
  stroke(maxh,maxs,maxb);
  arc(180,130,vol*8000,vol*8000,radians(0), radians(mouseX-50));
  stroke(maxh,maxs,maxb);
  arc(250,80,vol*5000,vol*5000,radians(0), radians(mouseX-60));
}

function drawtriangle(){
  var vol = mic.getLevel();
  stroke(maxh,maxs,maxb);
  triangle(2000*vol,2000*vol,1*vol,8000*vol,3999*vol,8000*vol);
  //triangle(windowWidth/2,windowHeight/2,windowWidth/2-100*vol,windowHeight/2+175*vol,windowWidth/2+100*vol,windowHeight/2+175*vol);
}

function drawrectangle(){
  var vol = mic.getLevel();
  fill(maxh,maxs,maxb);
  line(windowWidth/2,windowHeight/2,8000*vol,8000*vol);
}

function enthusiasm() {
  colorMode(HSB);
  buttoncontrol = 0;
	mode = 0;
	maxh = 0;
	maxs = 0;
	maxb = 0;
	minh = 200;
	mins = 0;
	minb = 0;
	maxh = Math.floor((Math.random()*120) + 180);
	maxs = Math.floor((Math.random()*30) + 50);
	maxb = Math.floor((Math.random()*20) + 50);
}

function jealous() {
  colorMode(HSB);
  buttoncontrol = 1;
	mode = 0;
	maxh = 180;
	maxs = 0;
	maxb = 0;
	minh = 60;
	mins = 0;
	minb = 100;
	maxh = Math.floor((Math.random()*120) + 60);
	maxs = Math.floor((Math.random()*125) + 50);
	maxb = Math.floor((Math.random()*255) + 50);
}

function confident() {
  colorMode(HSB);
  buttoncontrol = 2;
	mode = 0;
	maxh = 200;
	maxs = 0;
	maxb = 0;
	minh = 0;
	mins = 0;
	minb = 100;
  maxh = Math.floor((Math.random()*120) + 180);
	maxs = Math.floor((Math.random()*30) + 50);
	maxb = Math.floor((Math.random()*20) + 50);
}
