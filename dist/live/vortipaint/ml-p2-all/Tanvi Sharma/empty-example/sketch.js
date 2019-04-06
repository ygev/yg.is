var NUMSINES = 5;
var sines = new Array(NUMSINES); // an array to hold all the current angles

var slidernumsines; // how do i assign the value for a universal variable via slider?

var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine

var alpha = 50; // how opaque is the tracing system

var sliderspeed;
var sliderradius;

function adjustSines() {
	// console.log('Size of sines before adjusting: ' + sines.length);

	var sliderValue = slidernumsines.value();
	var diff = sliderValue - sines.length;

	if (diff > 0) {
		// We add elements to `sines` :D
		var newSines = new Array(diff);
		for (var i = 0; i < newSines.length; i++) {
			newSines[i] = PI;
		}
		sines = sines.concat(newSines); // https://stackoverflow.com/a/12803679/3150771
	} else if (diff < 0) {
		// We remove elements from `sines` :(
		sines = sines.splice(abs(diff));
	} else {
		// Do nothing
	}

	// console.log('Size of sines after adjusting: ' + sines.length);
}

function setup() {
  createCanvas(710, 400);
  createP("speed");
  sliderspeed = createSlider(1, 50, 5);
  createP(" number of elements ");
  slidernumsines = createSlider(1, 50, 5);
  createP("radius of circle");
  sliderradius = createSlider(1, 10, 4);

  rad = height / 6, // compute radius for central circle
  background(204); // clear the screen

  for (var i = 0; i < sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw() {
	adjustSines();

  var trace = false; // are we tracing?
  if (!trace) {
    stroke(0, 255); // black pen
    noFill(); // don't fill
  }
  //

  //fill(204, 0, 0);
  stroke(214, 0, 20);

  let d = dist(pmouseX, pmouseY, mouseX, mouseY);
  strokeWeight(d/2);
  line(pmouseX,pmouseY,mouseX,mouseY);
//  ellipse(mouseX, mouseY, 20, 20);

  stroke(0);
  strokeWeight(1);

  // MAIN ACTION
  var ratio = sliderspeed.value(); // what multiplier for speed is each additional sine?

  push(); // start a transformation matrix
  translate(width / 2, height / 2); // move to middle of screen
  fill(204);

  for (var i = 0; i < sines.length; i++) {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing

    // setup for tracing
    if (trace) {
      stroke(0, 0, 255 * (float(i) / sines.length), alpha); // blue
      fill(255, 255, 255, alpha / 2); // also, um, blue
      erad = 5.0 * (1.0 - float(i) / sines.length / 2); // pen width will be related to which sine
    }

    var radius = rad / (i + sliderradius.value()); // radius for circle 1 itself
    rotate(sines[i]); // rotate circle

    if (!trace) {
      ellipse(mouseX / 2, mouseY / 2, radius * 2, radius * 2); // if we're simulating, draw the sine
    }

    push(); // go up one level
    translate(0, radius); // move to sine edge
    //  if (!trace)
    //  ellipse(mouseX/2, mouseY/2, 5, 5); // draw a little circle
    // if (trace)
    //   ellipse(mouseX/2, mouseY/2, erad, erad); // draw with erad if tracing

    pop(); // go down one level

    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; // update angle based on fundamental
  }
  pop(); // pop down final transformation
}

function keyReleased() {
  if (key == ' ') {
   //  trace = !trace;
    background(200,200,200);
  }
}

function mousePressed() {

}
