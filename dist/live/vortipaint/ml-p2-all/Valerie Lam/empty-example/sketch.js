var cnv;
var r;
var counter = 0;
var colorCode = 0;
var hSlider;
var sSlider;
var rSlider;
var aSlider;
var exSlider;
var whySlider;
var bezierBtn;
var rectBtn;
var canBezier;
var canRect;
var radioshape;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  r = 15;

  // create sliders
  hSlider = createSlider(0, 330);
  hSlider.position(20, 160);
  sSlider = createSlider(1, 5, 1);
  sSlider.position(20, 310);
  rSlider = createSlider(1,20,3);
  rSlider.position(20,260);
  aSlider = createSlider(.1, 1, 1, 0);
  aSlider.position(20,210);
  // exSlider = createSlider(2,10,2);
  // exSlider.position(20,300);
  // whySlider = createSlider(2,10,2);
  // whySlider.position(20,350);

  //create radio
  radioshape = createRadio(0,4,1);
  radioshape.option('Bezier',1);
  radioshape.option('Rectangle',2);
  radioshape.option('Ellipse',3);
  radioshape.option('Circle',4);
  radioshape.style('width', '50px');
  textAlign(CENTER);
  radioshape.position(20,370);

  //create buttons
  // bezierBtn = createButton('Bezier');
  // bezierBtn.position(20, 400);
  // bezierBtn.mousePressed();
  // canBezier = false;
  // rectBtn = createButton('Rectangle');
  // rectBtn.position(20,500);
  // rectBtn.mousePressed();
  // canRect = false;
}

function draw() {
  //shapes toggle
  // var val = radioshape.value();
  // if (radioshape.value() == 1) {
  //   bezier(0, 20, mouseX - 250, mouseY - 250, 100, 100, mouseX, mouseY);
  // }
  // else if (radioshape.value() == 2) {
  //   rect(0, 0, mouseX, mouseY);
  // }
  // else if (radioshape.value() == 3) {
  //   ellipse(0, 0, mouseX, mouseY);
  // }
  // else (radioshape.value() == 4) {
  //   ellipse(0, 0, mouseX, mouseX);
  // }

  // colorIndicator();

  // noMouse();
  if (mouseX >= 200) {
    cnv.translate(windowWidth / 2, windowHeight / 2) ;
    cnv.rotate(radians(r));
    r += rSlider.value();

    stroke(hSlider.value(), 100, 100, aSlider.value());
    strokeWeight(sSlider.value());
    noFill();

    if (mouseIsPressed) {
      radioshape.value();
      if (radioshape.value() == 1) {
        bezier(0, 20, mouseX-200, mouseY - 250, 100, 100, mouseX, mouseY);
      }
      if (radioshape.value() == 2) {
        rect(0, 0, mouseX-200, mouseY);
      }
      if (radioshape.value() == 3) {
        ellipse(0, 0, mouseX-200, mouseY);
      }

      if (radioshape.value() == 4) {
        ellipse(0, 0, mouseX-200, mouseX-200);
      }
    }
  }


  // cnv.translate(windowWidth / 2, windowHeight / 2) ;
  // cnv.rotate(radians(r));
  // r += rSlider.value();
  //
  // stroke(hSlider.value(), 100, 100, aSlider.value());
  // strokeWeight(sSlider.value());
  // noFill();

  // if (canBezier == true){
  //
  //   bezier(0, 20, mouseX - 250, mouseY - 250, 100, 100, mouseX, mouseY);
  //
  // }
  //
  // if (canRect == true){
  //   rect(0, 0, mouseX, mouseY);
  // }

  // if (mouseIsPressed) {
  //   radioshape.value();
  //   if (radioshape.value() == 1) {
  //     bezier(0, 20, mouseX - 250, mouseY - 250, 100, 100, mouseX, mouseY);
  //   }
  //   if (radioshape.value() == 2) {
  //     rect(0, 0, mouseX, mouseY);
  //   }
  //   if (radioshape.value() == 3) {
  //     ellipse(0, 0, mouseX, mouseY);
  //   }
  //
  //   if (radioshape.value() == 4) {
  //     ellipse(0, 0, mouseX, mouseX);
  //   }
  // }
}

//the original press and toggle

// if (mouseIsPressed) {
//   radioshape.value() = counter % 4;
//   if (radioshape.value() == 0) {
//     bezier(0, 20, mouseX - 250, mouseY - 250, 100, 100, mouseX, mouseY);
//   }
//   if (radioshape.value() == 1) {
//     rect(0, 0, mouseX, mouseY);
//   }
//   if (radioshape.value() == 2) {
//     ellipse(0, 0, mouseX, mouseY);
//   }
//
//   if (radioshape.value() == 3) {
//     ellipse(0, 0, mouseX, mouseX);
//   }
// }

// function changeToBez() {
//   stroke(hSlider.value(), 100, 100);
//   bezier(0, 20, mouseX - 200, mouseY - 200, 90, 90, mouseX, mouseY);
//   if (canBezier == false){
//
//     canBezier = true;
//
//   }
//   else {
//
//     canBezier = false;
//
//   }
// }
//
// function mousePressed() {
//   changeToBez();

// }
//   if (canBezier == true) {
//     changeToBez();
//     return false;
// }
// else if (canRect)

function mouseClicked() {
  counter++;
  colorCode++;
}

// function noMouse() {
//   if (mouseX <= 200) {
//     draw() = !draw();
//   }
//   else {
//     draw();
//   }
// }

function keyPressed() {
  if (key == 's') {
    save('spinart.jpg');
  } else {
    background(0);
  }
}

function colorIndicator() {
  push();
  noStroke();
  fill(hSlider.value(), 100, 100);
  rect(22, 85, 128, 10);
  pop();
}
