var scene = 0;
var lW = 1;
var sS = 2;
var cC;
var active = 1;
var s;


function setup() {
  createCanvas(windowWidth, windowHeight);
}



function mousePressed() {
	loop();
}
function mouseReleased() {
	noLoop();
}

function color1() {
  fill(mouseX,mouseY,50);
  stroke(mouseX,mouseY,50);
}
function color2() {
  fill(50,mouseX,mouseY);
  stroke(50,mouseX,mouseY);
}
function color3() {
  fill(mouseX,50,mouseY);
  stroke(mouseX,50,mouseY);
}

function draw() {
  if (active == 1){
		color1();
	} else if (active == 2){
    color2();
  } else if (active == 3){
    color3();
  }
  //blendMode(HARD_LIGHT)
	drawrand4();
}


function drawrand4() {
  rectMode(CENTER);
  if (scene == 1) {
      noStroke();
   	translate(width/2, height/2);
		for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			ellipse(mouseX, mouseY, mouseX/sS, mouseX/sS);
			pop();
		}
	} if (scene == 7) {
      noStroke();
   	translate(width/2, height/2);
		for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			ellipse(mouseX, mouseY, mouseX/sS, mouseY/sS);
			pop();
		}
	} else if (scene == 2) {
      noStroke();
    translate(width/2, height/2);
    rotate(mouseX);
    rect(0, 0, mouseX,mouseX);
  } else if (scene == 3) {
      noStroke();
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			rect(mouseX, mouseY, mouseX/sS, mouseX/sS);
			pop();
		}
  }else if (scene == 8) {
      noStroke();
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			rect(mouseX, mouseY, mouseX/sS, mouseY/sS);
			pop();
		}
  } else if (scene == 4) {
    translate(width/2, height/2);
    rotate(mouseX);
    strokeWeight(lW);
  	line(mouseX,mouseX,mouseY,mouseY)
	} else if (scene == 5) {
		translate(width/2, height/2);
		for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
      strokeWeight(lW);
			line(mouseY, mouseY, mouseX,mouseY);
			pop();
		}
	} else if (scene == 14) {
		translate(width/2, height/2);
		for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
      strokeWeight(lW);
			bezier(mouseX, mouseY, 10, mouseX, 90, 90, 15, mouseY);
			pop();
		}
  }else if (scene == 15) {
		translate(width/2, height/2);
		for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
      stroke(255);
      strokeWeight(lW);
			bezier(mouseX, mouseY, 10, mouseX, 90, 90, 15, mouseY);
			pop();
		}
  }else if (scene == 16) {
    noStroke();
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			triangle(mouseX, mouseY, 58, mouseX, mouseY, 75);
			pop();
		}
  }else if (scene == 17) {
    noStroke();
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			triangle(mouseX, mouseY, 58, 20, 86, 75);
			pop();
		}
  }else if (scene == 18) {
    noStroke();
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			triangle(0, mouseY, 58, mouseX, mouseX, mouseY);
      pop();
		}
  }else if (scene == 19) {
    noStroke();
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
			push();
			rotate(TWO_PI * i / 8);
			rect(mouseY,20, 50, mouseY);
      pop();
		}
  }else if (scene == 6) {
    strokeWeight(lW);
    translate(width/2, height/2);
    rotate(mouseX);
    line(0, 0, mouseX,mouseY);
  }else if (scene == 9) {
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    strokeWeight(lW);
    line(mouseX, 0, mouseX,mouseY);
  }else if (scene == 13) {
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    strokeWeight(lW);
    bezier(mouseX, mouseY, 10, mouseX, 90, mouseY, 15, mouseY);
  }else if (scene == 10) {
    noStroke();
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    rect(mouseX, -10, mouseY/sS,mouseY/sS);
}else if (scene == 11) {
    noStroke();
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    ellipse(mouseX, -10, mouseY/sS,mouseY/sS);
}else if (scene == 23) {
    strokeWeight(lW);
    noFill();
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    triangle(0, 0, 0, mouseX, mouseX, 0);
}else if (scene == 24) {
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    bezier(0, mouseY, 10, mouseX, 90, 200, 15, mouseY);
}else if (scene == 25){
    strokeWeight(lW);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX/2);
    if (mouseX < width/2){
      ellipse(mouseX/sS, mouseX/sS, random(50,500)/sS,mouseY/sS);
      triangle(0, mouseY/sS, 58, mouseX/sS, mouseX/sS, mouseY/sS);
    }else if (mouseX > width/2){
      ellipse(random(50,width), mouseX, random(50,width)/sS,mouseY/sS);
      triangle(0, mouseY/sS, 58, mouseX/sS, mouseX/sS, mouseY/sS);
    }
    noFill();
    bezier(mouseX, mouseX, 10, mouseX, 90, mouseY, 15, mouseY);
  }else if (scene == 26){
      strokeWeight(lW);
      rectMode(CENTER);
      translate(width/2, height/2);
      rotate(mouseX/2);
      if (mouseX < width/2){
        ellipse(random(0,750),random(0,750), random(0,75)/sS,mouseY/sS);
      }else if (mouseX > width/2){
        triangle(random(0,75), mouseY/sS, random(0,75), random(0,75), random(0,75), mouseY/sS);
      }
      noFill();
      bezier(mouseX, mouseX, 10, mouseX, 90, mouseY, 15, mouseY);
    } else if (scene == 21) {
      noStroke();
      rectMode(CENTER);
      translate(width/2, height/2);
      rotate(mouseX);
      triangle(0, mouseY/sS, 58, mouseX/sS, mouseX/sS, mouseY/sS);
  }else if (scene == 22) {
      noStroke();
      rectMode(CENTER);
      translate(width/2, height/2);
      rotate(mouseX);
      ellipse(mouseY, mouseX, mouseY/sS,mouseX/sS);
  }else if (scene == 20){
      strokeWeight(lW);
      rectMode(CENTER);
      translate(width/2, height/2);
      rotate(mouseX/2);
      if (mouseX <200){
        ellipse(mouseX, mouseX, mouseY/sS,mouseY/sS)
      }
      triangle(0, mouseY, 58, mouseX, mouseX, mouseY);
      noFill();
      bezier(mouseX, mouseX, 10, mouseX, 90, mouseY, 15, mouseY);
    }else if (scene == 12){
    strokeWeight(lW);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(mouseX);
    line(mouseX,mouseX,50,mouseY);
    noStroke();
    if (mouseX <200){
      ellipse(mouseX, mouseX, mouseY/sS,mouseY/sS)
    }
    rect(mouseX, -10, mouseY/sS,mouseY/sS);
  }
}



function keyPressed() {
	if (key == 'a'){
		scene = 1;
	} else if (key == 's') {
		scene = 2;
	} else if (key == 'w') {
		scene = 13;
	}
  else if (key == 'r') {
		scene = 14;
	}else if (key == 't') {
		scene = 15;
	}else if (key == 'y') {
		scene = 16;
	}else if (key == 'z') {
		scene = 17;
	}else if (key == 'x') {
		scene = 18;
	}else if (key == 'c') {
		scene = 19;
	}else if (key == 'v') {
		scene = 20;
	}else if (key == 'b') {
		scene = 21;
	}
  else if (key == 'n') {
		scene = 22;
	}else if (key == 'd') {
		scene = 3;
	} else if (key == 'f') {
		scene = 4;
	}else if (key == 'g') {
		scene = 5;
	}else if (key == ' ') {
		background(255);
  }else if (key == 'h') {
		scene = 6;
  } else if (keyCode === UP_ARROW) {
    lW = lW + 1;
    sS = sS + 2;
  }else if (keyCode === DOWN_ARROW) {
    lW = lW - 1;
    sS = sS - 2;
    if (lW < 1);{
      lW = 1;
    }
    if (sS < 2);{
      sS = 2;
    }
  } else if (key == 'q') {
    scene = 7;
	} else if (key == 'e') {
    scene = 8;
	} else if (key == 'j') {
		scene = 9;
  }else if (key == 'k') {
		scene = 10;
  }else if (key == 'l') {
		scene = 11;
  }else if (key == 'u') {
		scene = 12;
  } else if (key == 'i') {
		scene = 23;
  }else if (key == 'o') {
		scene = 24;
  }else if (key == 'p') {
		scene = 25;
  }else if (key == 'm') {
		scene = 26;
  } else if (key == '1') {
    active = 1;
	} else if (key ==  '2') {
    active = 2;
	} else if (key ==  '3') {
    active = 3;
	}
  else if (keyCode ===  SHIFT) {
    saveCanvas('weird draw', 'png');
	}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
