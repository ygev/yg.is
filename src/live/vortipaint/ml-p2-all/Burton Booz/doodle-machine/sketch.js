var angle = 0;
var cubic;

var sSlider, xSlider, ySlider, zSlider, speedSlider, zspaceSlider;

function preload() {
  cubic = loadModel('/assets/cubic2.obj');
}

function setup() {
  // put setup code here
  createCanvas(600, 800, WEBGL);

  // background(250);

  // OBJECT STYLE SLIDERS

  sy = 0;

  sy += 60;

  sSlider = createSlider(0, 255, 100);
  sSlider.position(20, sy);
  sSlider.style('width', '80px');
  sy += 60;
  swSlider = createSlider(0, 25, 100);
  swSlider.position(20, sy);
  swSlider.style('width', '80px');
  sy += 60;
  xSlider = createSlider(0, 255, 100);
  xSlider.position(20, sy);
  xSlider.style('width', '80px');
  sy += 60;
  ySlider = createSlider(0, 255, 100);
  ySlider.position(20, sy);
  ySlider.style('width', '80px');
  sy += 60;
  zSlider = createSlider(0, 255, 100);
  zSlider.position(20, sy);
  zSlider.style('width', '80px');
  sy += 60;
  speedSlider = createSlider(0, 255, 100);
  speedSlider.position(20, sy);
  speedSlider.style('width', '80px');
  sy += 60;
  colorSlider = createSlider(0, 255, 100);
  colorSlider.position(20, sy);
  colorSlider.style('width', '80px');
  sy += 60;
  zspaceSlider = createSlider(0, 255, 100);
  zspaceSlider.position(20, sy);
  zspaceSlider.style('width', '80px');

  // RULER SLIDERS
  leftruleSlider = createSlider(0, 600, 0);
  leftruleSlider.position(220, 950);
  leftruleSlider.style('width', '600px');

  // lrwSlider = createSlider(1, 10, 2);
  // lrwSlider.position(740, 930);
  // lrwSlider.style('width', '80px');

  sy += 120;
  rightruleSlider = createSlider(0, 600, 600);
  rightruleSlider.position(220, 970);
  rightruleSlider.style('width', '600px');

  // rrwSlider = createSlider(0, 25, 100);
  // rrwSlider.position(220, 930);
  // rrwSlider.style('width', '80px');

  // sy += 60;
  // topruleSlider = createSlider(0, 255, 100);
  // topruleSlider.position(20, sy);
  // topruleSlider.style('height', '80px');
  //
  // sy += 60;
  // bottomruleSlider = createSlider(10, 255, 100);
  // bottomruleSlider.position(20, sy);
  // bottomruleSlider.style('height', '80px');

  // OBJECT SWITCH BUTTONS

  loadImage('asse ts/dancer.png', function(img) {
    image(img, 0, 0);
  });
}

// function draw() {
//   image(img, 0, 0);
// }

function draw() {
  // background(0, 0, 255);

  // Left Rule
  // var lrw = lrwSlider.value();
  // strokeWeight(lrw);
  // stroke(0);

  push();
  translate(-300, 0, 0);
  var leftruleLimit1 = 10;
  var leftruleLimit2 = 590;
  var lrs = leftruleSlider.value();
  var lr = constrain(lrs, leftruleLimit1, leftruleLimit2);
  strokeWeight(2);
  stroke(0);

  line(lr, -400, lr, height);
  pop();

  // Right Rule

  push();
  translate(-300, 0, 0);
  var rightruleLimit1 = 10;
  var rightruleLimit2 = 590;
  var rrs = rightruleSlider.value();
  var rr = constrain(rrs, rightruleLimit1, rightruleLimit2);
  strokeWeight(2);
  stroke(0);

  line(rr, -400, rr, height);
  pop();

  // Top Rule

  // Bottom Rule

  var sw = swSlider.value();
  strokeWeight(sw / 20);
  stroke(0);

  if (mouseIsPressed == true) {
    push();
    // noCursor();

    // background(175);

    // rotateX(angle);
    // var swivelX = map(mouseX, 0, width, 395, 400);
    // var swivelY = map(mouseY, 0, width, 240, 241);
    // var swivelZ = map(mouseY, 0, width, 240, 250);

    // rotateY(swivelY);
    // rotateX(swivelX);
    // rotateZ(swivelZ);
    var zSpace = zspaceSlider.value();
    translate(mouseX - width / 2, mouseY - height / 2, zSpace - 150)
    // rotateZ(mouseX);
    // rect(0, 0, 250, 250);
    var d = dist(width / 2, height / 2, mouseX, mouseY);

    // if (keyIsPressed == true) {
    //
    // // background(0, 0, 255);
    // if (key = '1') {scale(.3, .2);}
    // else if (key = '2') {scale(.2, .3);}
    // }

    // scale(d/10000 + 2);

    // scale(.2);

    var s = sSlider.value();
    scale(.002 * s);

    angle += 0.03;

    ambientLight(100);

    var speed = speedSlider.value();

    var xr = xSlider.value();
    rotateX(frameCount * 0.002 * xr / speed * 10);

    var yr = ySlider.value();
    rotateY(frameCount * 0.002 * yr / speed * 10);

    var zr = zSlider.value();
    rotateZ(frameCount * 0.002 * zr / speed * 10);

    var color = colorSlider.value();
    // var randomLight = random(0,400);
    directionalLight(210, color, 20, 100, color, 10);
    // noStroke();
    model(cubic);

    // text("green", gSlider.x * 2 + gSlider.width, 65);
    // fill(20);
    pop();
  }

  if (keyIsPressed == true) {
    if (key == ' ') {
      clear();
    }
  }
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('test', 'png')
  }
}
