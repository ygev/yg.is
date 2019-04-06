var sliderbackground;
var sliderstrokecolor1;
var sliderstrokecolor2;
var sliderstrokeweight1;
var sliderstrokeweight2;
var slidersizex;
var slidersizey;
var slidernumber;
var radioshape;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //HSB = hue, saturation, brightness
  colorMode(HSB, 360);
  smooth();

  sliderbackground = createSlider(0, 360, 0);
  sliderbackground.position(40, 220);

  sliderstrokecolor1 = createSlider(100, 360, 100);
  sliderstrokecolor1.position(40, 270);

  sliderstrokecolor2 = createSlider(100, 360, 250);
  sliderstrokecolor2.position(40, 370);

  sliderstrokeweight1 = createSlider(1, 30, 5);
  sliderstrokeweight1.position(40, 320);

  sliderstrokeweight2 = createSlider(1, 30, 10);
  sliderstrokeweight2.position(40, 420);

  slidersizex = createSlider(0, width, 100);
  slidersizex.position(40, 470);

  slidersizey = createSlider(0, height, 100);
  slidersizey.position(40, 520);

  slidernumber = createSlider(50, 500, 100)
  slidernumber.position(40, 570);

  // slidershape = createSlider(0, 2, 0, 1)
  // slidershape.position(40, width/2);

  radioshape = createRadio();
  radioshape.option('ellipse', 1);
  radioshape.option('square', 2);
  radioshape.option('lines', 3);
  radioshape.style('height', '50px');
  textAlign(CENTER);
  radioshape.position(40, 165);
}

function draw() {
  // colorIndicator ();

  //sliders
  background(sliderbackground.value());

  noFill();
  // stroke(sliderstrokecolor1.value(), 200, 360);
  // stroke(sliderstrokecolor2.value(), 100, 200);

  // strokeWeight(sliderstrokeweight1.value());
  // strokeWeight(sliderstrokeweight2.value());

  //shapes
  var counter = 0;
  var val = radioshape.value();
  for (var x = 0; x <= width; x += slidernumber.value()) {
    for (var y = 0; y <= height; y += slidernumber.value()) {
      if (counter % 2 == 0) {
        stroke(sliderstrokecolor1.value(), 200, 360);
        strokeWeight(sliderstrokeweight1.value());
      } else {
        stroke(sliderstrokecolor2.value(), 250, 360);
        strokeWeight(sliderstrokeweight2.value());
      }
      if (radioshape.value() == 1) {
        ellipse(x, y, slidersizex.value(), slidersizey.value());
      }
      if (radioshape.value() == 2) {
        rect(x, y, slidersizex.value(), slidersizey.value());
      }
      if (radioshape.value() == 3) {
        line(x, y, slidersizex.value(), slidersizey.value());
      }
      counter++;
    }
  }

  //tagline
  // fill(360);
  // noStroke();
  // rect(0, 0, width / 4, height);
  // fill(0);
  // noStroke();
  // text("background color", 40, width/9); //change background color black and white
  //
  // text("stroke color", 40, width/7); // change stroke color black and white
  //
  // text("stroke weight", 40, width/5.7); // change stroke stroke weight
  //
  // text("width", 40, width/4.7); // change horizontal lines
  //
  // text("height", 40, width/4); // change vertical lines
  //
  // text("change distance", 40, width/3.5); // change distance of each shapes
  //
  // text("change shapes", 40, width/3); // change shapes

}

// function colorIndicator (){
//   fill(sliderbackground.value(),250,360);
//   rect(22,85,50,50);
// }

function keyPressed() {
  if (key == 's') {
    save('pattern.png');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
