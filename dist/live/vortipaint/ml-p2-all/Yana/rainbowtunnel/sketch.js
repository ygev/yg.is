var hue;
var rateSlider;
var reflectSlider;
var bwToggle;
var bwDirection = true;
var brightness;
var bgToggle;
var customToggle;
var radio;
var colorOne;
var colorTwo;

function setup() {
  createCanvas(windowWidth - 300, windowHeight);
  smooth();
  hue = 0;
  brightness = 0;

  // Create nmber of rotations Slider
  reflectSlider = createSlider(2, 20, 8);
  reflectSlider.class("slider");
  document.getElementsByClassName("reflect-settings")[0].appendChild(reflectSlider.elt);

  // Color speed slider
  rateSlider = createSlider(1, 20, 8);
  rateSlider.class("slider");
  document.getElementsByClassName("rate-settings")[0].appendChild(rateSlider.elt);


  // Create radio buttons to choose between rainbow, grayscale and custom colors.
  radio = createRadio();
  radio.class("radio-ass");
  radio.style("padding-top", "15px");
  radio.option('Rainbow');
  radio.option('Grayscale');
  radio.option('Custom');
  document.getElementsByClassName("color-settings")[0].appendChild(radio.elt);

  // Create clear button.
  var resetButton = createButton("✖ Clear");
  resetButton.mousePressed(resetSketch);
  resetButton.class("reset-button-style");
  document.getElementsByClassName("reset-button")[0].appendChild(resetButton.elt);

  // Create save button.
  var saveButton = createButton("✓ Save");
  saveButton.mousePressed(saveSketch);
  saveButton.class("save-button-style");
  document.getElementsByClassName("save-button")[0].appendChild(saveButton.elt);
  document.getElementById("defaultradio0-0").checked = true;

  // Create slider for "from" color
  colorOne = createSlider(0, 360, 0);
  colorOne.class("slider");
  colorOne.id("cone-slider");
  document.getElementsByClassName("colorone-settings")[0].appendChild(colorOne.elt);

  // Create slider for "to" color
  colorTwo = createSlider(0, 360, 60);
  colorTwo.class("slider");
  colorTwo.id("ctwo-slider");
  document.getElementsByClassName("colortwo-settings")[0].appendChild(colorTwo.elt);


}

// Saves the canvas
function saveSketch() {
  saveCanvas('vortexPaint', 'png');
}

// Clears the canvas
function resetSketch() {
  clear();
}

// Changes background color of body.
function bgChange() {
  var checkBox = document.getElementById("cbx");
  if (checkBox.checked == true) {
    document.body.style.transition = "all 0.2s";
    document.body.style.backgroundColor = "rgb(30,30,30)";
    console.log('Checking!');
  } else {
    document.body.style.transition = "all 0.2s";
    document.body.style.backgroundColor = "rgb(220,220,220)";
    console.log('Unchecking!');
  }
}

// The Big "If Sandwich" that controls all brushes. 
function draw() {
  // Rainbow paint
  if (mouseIsPressed == true) {
    if (radio.value() == "Rainbow") {
      if (hue > 360) {
        hue = 0;
      } else {
        hue += rateSlider.value();
      }

      colorMode(HSL, 360);
      noStroke();
      fill(hue, 200, 200);

      // Grayscale paint
    } else if (radio.value() == "Grayscale") {
      if (brightness > 360) {
        bwDirection = false;
      } else if (brightness < 0) {
        bwDirection = true;
      }
      if (bwDirection == true) {
        brightness += rateSlider.value();
      } else {
        brightness -= rateSlider.value();
      }

      colorMode(HSL, 360);
      noStroke();
      fill(200, 0, brightness);

      // Custom paint
    } else if (radio.value() == "Custom") {
      if (colorOne.value() < colorTwo.value()) {
        if (hue < colorOne.value()) {
          bwDirection = true;
        } else if (hue > colorTwo.value()) {
          bwDirection = false;
        }
        if (bwDirection == true) {
          hue += rateSlider.value();
        } else {
          hue -= rateSlider.value();
        }
      } else {
        if (hue > colorOne.value()) {
          bwDirection = true;
        } else if (hue < colorTwo.value()) {
          bwDirection = false;
        }
        if (bwDirection == false) {
          hue += rateSlider.value();
        } else {
          hue -= rateSlider.value();
        }
      }

      colorMode(HSL, 360);
      noStroke();
      fill(hue, 200, 200);
    }



    // reflection
    translate(width / 2, height / 2);
    for (var i = 0; i < reflectSlider.value(); i++) {
      push();
      translate(0, 0);
      rotate(TWO_PI * i / reflectSlider.value());
      ellipse(mouseX, mouseY, mouseX / 2, mouseX / 2);
      ellipse(pmouseX, pmouseY, pmouseX / 2, pmouseX / 2);
      pop();
    }
  }

  // Color indicators
  document.getElementsByClassName("slider-value-reflect")[0].innerHTML = reflectSlider.value()
  document.getElementsByClassName("slider-value-rate")[0].innerHTML = rateSlider.value()
  document.getElementsByClassName("colorone-indicator")[0].style.backgroundColor = "hsl(" + colorOne.value() + ", 80% , 60% )";
  document.getElementsByClassName("colortwo-indicator")[0].style.backgroundColor = "hsl(" + colorTwo.value() + ", 80% , 60% )";

  // Hide & show the custom settings.
  if (radio.value() == "Rainbow" || radio.value() == "Grayscale") {
    document.getElementsByClassName("color-sliders")[0].setAttribute("style", "display:none");

  } else {
    document.getElementsByClassName("color-sliders")[0].setAttribute("style", "display:block");
  }
}
