// Thanks to:
// Dan Schiffman for tutorials on p5.sound and FFT
// R. Luke DuBois for p5.speech http://ability.nyu.edu/p5.js-speech/
// R. Luke DuBois for the initial seed for this tool — http://ability.nyu.edu/p5.js-speech/examples/05continuousrecognition.html
// Brian Grinstead for TinyColor https://github.com/bgrins/TinyColor

var myRec = new p5.SpeechRec('en-US', parseResult);
		myRec.continuous = true;
		myRec.interimResults = true;

let sentenceStructure = [];
let mostrecentword = "black";

var scene = 1;
var brush = 0;

// Initial direction values
var dx = 0;
		dy = 0;

// Initial color values
var r = 0;
 		g = 0;
		b = 0;

// Starting point
var x, y;

var osc;

var fft;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// Starting point
	x = width/2;
	y = height/2;

	mic = new p5.AudioIn();
  mic.start(); // Start p5 audio

	myRec.start(); // Start speech rec

	// Start p5 Oscillator
	osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

	fft = new p5.FFT();
	mic.connect(fft);

	var saveButton = createButton('Save Image');
  saveButton.mousePressed(saveImg);
}

function draw() {
  if (scene == 1) {
    background(255);
    push();
    fill(0);
    textSize(20);
    noStroke();
    textAlign(CENTER);
    text("Say a direction, color, or shape to draw.\n\nSay clear to reload.\n\nSay 'stop' to stop drawing.\n\nPress 1, 2, 3 to change scenes.", width/2, height/2-80);
    pop();
  }

  if (scene == 2) {
    var vol = mic.getLevel();

    // Draw an ellipse with height based on volume
    var w = map(vol, 0, 1, 2, 90);

		push();
    if (brush == 0) {
      // smooth
      fill(r, g, b);
      stroke(r, g, b);
      ellipse(x, y, w);
    } else if (brush == 1) {
      // rough
      fill(r, g, b);
      stroke(r, g, b);
      rect(x, y, random(w), random(w));
    } else if (brush == 2) {
      // rough
      fill(r, g, b);
      stroke(r, g, b);
			triangle(x, y, x, y+random(w), x+random(w), y);
    }
		pop();

    x+=dx;
    y+=dy;
    if(x<0) x = width;
    if(y<0) y = height;
    if(x>width) x = 0;
    if(y>height) y = 0;
  }

	if (scene == 3) {
		osc.stop();

		var centroidplot = 0.0;
		var spectralCentroid = 0;

		var spectrum = fft.analyze();
		var nyquist = 22050;
		spectralCentroid = fft.getCentroid();

		var mean_freq_index = spectralCentroid/(nyquist/spectrum.length);

		centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, height);

		fill(r, g, b);
		stroke(r, g, b);
		ellipse(centroidplot, y, 2);

		x+=dx;
		y+=dy;
		if(x<0) x = width;
		if(y<0) y = height;
		if(x>width) x = 0;
		if(y>height) y = 0;
	}
}

function parseResult() {
	sentenceStructure = myRec.resultString.split(' '); // get all words

	mostrecentword = myRec.resultString.split(' ').pop().toLowerCase(); // get last word

	// Test for valid CSS color names
	var colorToTest = tinycolor(myRec.resultString.split(' ').pop().toLowerCase());
	if (colorToTest.isValid()) {
		let rgb = colorToTest.toRgb();
		r = rgb['r']
		g = rgb['g']
		b = rgb['b']
		let currentFreq = osc.freq()['value'];
		osc.freq(random(currentFreq, currentFreq-10)); // Change pitch slightly when color changes
	}

	if (mostrecentword.indexOf("left")!==-1) {
		dx=-1;
		dy=0;
		osc.freq(220);
		osc.amp(0.5, 0.05);
	} else if (mostrecentword.indexOf("right")!==-1 || mostrecentword.indexOf("sideways")!==-1) {
		dx=1;
		dy=0;
		osc.freq(220);
		osc.amp(0.5, 0.05);
	} else if (mostrecentword.indexOf("diagonal")!==-1) {
		dx=1;
		dy=1
		osc.freq(240);
		osc.amp(0.5, 0.05);
	} else if (mostrecentword.indexOf("up")!==-1) {
		dx=0;
		dy=-1;
		osc.freq(320);
		osc.amp(0.5, 0.05);
	} else if (mostrecentword.indexOf("down")!==-1) {
		dx=0;
		dy=1;
		osc.freq(200);
		osc.amp(0.5, 0.05);
	} else if(mostrecentword.indexOf("stop")!==-1) {
		dx = 0;
		dy = 0;
		osc.amp(0, 0);
	} else if(mostrecentword.indexOf("square")!==-1) {
		brush = 1;
		osc.setType('square');
	} else if(mostrecentword.indexOf("circle")!==-1 || mostrecentword.indexOf("test")!==-1) {
		brush = 0;
		osc.setType('sine');
	} else if(mostrecentword.indexOf("triangle")!==-1 || mostrecentword.indexOf("i")!==-1) {
		brush = 2;
		osc.setType('triangle');
	} else if (mostrecentword.indexOf("clear")!==-1) {
		background(255);
	}
}

function keyPressed() {
	if (keyCode == 32) {
		save('myDrawing.png');
	}

	if (key == '1') {
		push();
		noStroke();
		fill(255);
		rect(0, 0, width, height-60);
		pop();
		scene = 1;
	} else if (key == '2') {
		background(255);
		scene = 2;
	} else if (key == '3') {
		background(255);
		scene = 3;
	}
}

function saveImg() {
	save('myDrawing.png');
	return false;
}
