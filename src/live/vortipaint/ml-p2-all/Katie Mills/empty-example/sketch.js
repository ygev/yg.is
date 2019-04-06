// original source from: p5.gui by bitcraftlab  - interface code
//https://github.com/bitcraftlab/p5.gui
//p5.gui repo by kabrio - Additional Gui features
//https://github.com/kabrio/p5.gui
//cdaein class examples for speed rotation code
//other sources: p5.js/reference + stack overflow

var Speed = 20.0; // starting speed of rotation
var Stroke = 80;
var gui;
var Tools = ["Rotating Lines", "Glass", "Spikey Squares", "Erase"]
var Size = 10;
var Color = [69, 202, 190]; //rgb starting fill color.
//gui will convert it to a hex color.
var Save; //button
var Reset; //button

function setup() {

  createCanvas(windowWidth, windowHeight);

  gui = createGui('Double Click Me!'); //collapses tool bar

  sliderRange(0, 30, 1); //to, from, start
  gui.addGlobals("Size"); //slider size

  sliderRange(0, 180, 1); //to, from, start
  gui.addGlobals("Stroke", "Color", "Tools"); //slider stroke

  sliderRange(0.0, 100.0, 1.0); //to, from, start
  gui.addGlobals("Speed"); //slider speed

  gui.addButton("Save ", function(mouseIsPressed) {
    saveCanvas('myartwork', 'png');
  }); //create save button

  gui.addButton("Reset", function(mouseIsPressed) {
    background(255); //create reset button
  });

  background(255);

} //end setup


function draw() {

  var gui_element = document.querySelector(".qs_main");
  var gui_data = gui_element.getBoundingClientRect();
  // main interface - .qs_main - get the bounding rectangle around it

  //store the variables of .qs_main
  var gui_height = gui_data.height;
  var gui_width = gui_data.width;
  var gui_x = gui_data.x;
  var gui_y = gui_data.y;

  //skip draw if mouse is within gui - x + y
  // +10 and -10 defines an extended buffer around gui
  if (mouseX > gui_x - 10 && mouseX < gui_x + 10 + gui_width) {
    if (mouseY > gui_y - 10 && mouseY < gui_y + gui_height + 10) {
      return; //don't draw
    } // end if
  } // end if

  var r, g, b; //converting rgb to hex
  if (typeof(Color) == "string") { //if color is a string
    var first = Color.substr(1, 2); //takes first hex set, space 1 + 2
    var second = Color.substr(3, 2); //takes 2nd hex set, space 3 + 2
    var third = Color.substr(5, 2); //takes 3rd hex set, space 5 + 2

    r = unhex(first); //covert first hex set to R
    g = unhex(second); //convert second hex set to G
    b = unhex(third); //convert third hex set to B

  } //end if
  else {
    r = Color[0]; // else set the r to 0
    g = Color[1]; // else set g to position 1
    b = Color[2]; // else set the b to position 2
  } //end else

  var prep_stroke = Stroke; //takes value of stroke slider
  var stroke_weight = prep_stroke / 100.0; //converting to floats for stroke weight.
  stroke(0); //overall control of color of stroke
  strokeWeight(stroke_weight);

  if (mouseIsPressed) {
    if (Tools == "Rotating Lines") {
      fill(Color);
      translate(mouseX, mouseY); //redraws new starting point
      var set_speed = 100 - Speed;
      if (Speed == 0) {
        set_speed = 0;
      } else if (set_speed == 0) {
        set_speed = 1;
      }

      rotate(frameCount / set_speed); //speed of rotation
      var distance_val = Size; //controls size by slider
      var distance_min = distance_val - 98; // slider range 30 - 68 = - 98
      var distance_max = distance_min + 4; // need increments of 4 or looks awful
      translate(distance_max, distance_min); // the size circle it's rotating around.

      beginShape(); //weird pointer shape
      vertex(60, 48);
      bezierVertex(11, 24, 9, 26, 17, 20);
      bezierVertex(24, 14, 10, 21, 24, 21);
      bezierVertex(28, 20, 28, 12, 18, 28);
      bezierVertex(18, 12, 14, 26, 12, 26);
      bezierVertex(24, 26, 13, 23, 14, 27);
      bezierVertex(13, 10, 28, 22, 27, 20);
      bezierVertex(26, 27, 15, 14, 21, 29);
      bezierVertex(20, 15, 26, 26, 14, 28);
      endShape();
    } //end if rotating shape
    else if (Tools == "Glass") {
      var from = color(r, b, r); //this sequence has most dynamic color range
      var to = color(r, g, b); //combined with rgb
      var lerp = lerpColor(from, to, .50); //blending of 2 colors
      var min_val = Size;
      var max_val = min_val + 10; // control how big glass gets
      var randsize = random(min_val, max_val); //gives it a random size clump
      //each quad has 4 points, telling each point to be random from
      //x and y position of mouse.
      var quad_minX = mouseX - randsize; //min random size x
      var quad_maxX = mouseX + randsize; //max random size x
      var quad_minY = mouseY - randsize; //min random size y
      var quad_maxY = mouseY + randsize; //max random size y

      fill(from); //glass shapes
      quad(random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY));
      fill(lerp); //lerpcolor
      quad(random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY));
      fill(lerp); //lerpcolor
      quad(random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY));
      fill(to);
      quad(random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY),
           random(quad_minX, quad_maxX), random(quad_minY, quad_maxY));
    } // end else if glass
    else if (Tools == "Spikey Squares") {
      var from = color(r, b, r, 0.5 * 255); // from color range
      var to = color(r, g, b, 0.5 * 255); // to color range
      var c1 = lerpColor(from, to, .55); // color in between
      var c2 = lerpColor(from, to, .96); // second lerp layer
      var min_val = Size;
      var max_val = min_val + 15; // control how big squares get
      var randsize = random(min_val, max_val); // controls random size
      for (var i = 0; i < 100; i++) { //adding for loop creates squares

        fill(from);
        quad(random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize));
        fill(c1);
        quad(random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize));
        fill(c2);
        quad(random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize));
        fill(to);
        quad(random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize),
             random(mouseX - randsize, mouseX + randsize), random(mouseY - randsize, mouseY + randsize));
      } //end for loop
    } //end else if spike squares
    else if (Tools == "Erase") {
      var size_val = Size + 5; // sets size to slider value
      fill(255);
      noStroke();
      ellipse(mouseX, mouseY, size_val, size_val);
    } //end else if erase
  } //end if mouseIsPressed
} //end draw
