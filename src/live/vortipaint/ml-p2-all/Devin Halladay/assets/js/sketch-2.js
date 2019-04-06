var myRec = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
		myRec.continuous = true; // do continuous recognition
		myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var myVoice = new p5.Speech();

let mostrecentword;
let sentenceStructure = [];
let showText = false;

var capture;
var tracker;

var scene = 0;

var shapeArray = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	myRec.start(); // start voice recognition engine
	noLoop();

	capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();

  imageMode(CENTER);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);

	shapeArray = [
		rect(random(windowWidth), random(windowHeight), 40, 40),
		ellipse(random(windowWidth), random(windowHeight), 40, 40),
	]
}

function draw() {
	background(20);

	if (scene === 0) {
		push();
		textSize(20);
		stroke(0)
		fill("#FFE71B");
		textAlign(CENTER);
		text(`Press any key to start, then say a sentence. Press space to restart.`, windowWidth/2, windowHeight-40);
		pop();
	}

	if (scene === 1) {
	  let positions = tracker.getCurrentPosition();

	  for (let i = 0; i < positions.length; i++) {
			fill(255)
	    text(i, positions[i][0], positions[i][1]);
	  }

		for (var i = 1; i <= sentenceStructure.length; i++) {
			push();

			if (sentenceStructure.includes('blue')) {
		    fill(0, 0, 255)
			} else if (sentenceStructure.includes('red')) {
		    fill(255, 0, 0)
			} else if (sentenceStructure.includes('yellow')) {
		    fill(255, 255, 0)
			} else if (sentenceStructure.includes('green')) {
		    fill(0, 255, 0)
			}

			// var randShape = shapeArray[Math.floor(Math.random() * shapeArray.length)];
			// randShape;

			rect(random(windowWidth), random(windowHeight), (10)*i, (10)*i),

			// myVoice.speak(sentenceStructure);

			pop();
		}

		if (showText == true) {
			push();
			textSize(20);
			stroke(0)
			fill("#FFE71B");
			textAlign(CENTER);
			text(`I heard you say "${sentenceStructure.join(' ')}".`, windowWidth/2, windowHeight-40);
			pop();
		}
	}
}

function parseResult() {
	sentenceStructure = myRec.resultString.split(' ');

	console.log(sentenceStructure);
	console.log(myRec);

	showText = true;

	// Call the draw loop again
	redraw();
}

function keyPressed() {
	console.log(keyCode);
	if (scene == 0) {
		scene++
	} else if (scene = 1) {
		scene--
	}
}

document.addEventListener('keyup', function(e){
  if(e.keyCode == 32)
    window.location.reload();
})
