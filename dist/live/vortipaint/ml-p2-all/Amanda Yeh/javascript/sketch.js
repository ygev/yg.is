var currentPlay = false;
var fft;
var spectrum;
var framec = [];
var cframe;
var c;
var h;
var s;
var b;
var plevel;
var level;
var leveldiff;
var prevS;
var s;
var pw;
var ph;
var treble;
var ptreble;
var ht;
var pmid;
var mid;
var eh;
var ew;
var circles = [];
var ringN1;
var ringN2;
var trebleC;
var pbeats;
var bpm;
var pbtime;
var s1;
var sw1;
var diamondS;
var sw2;
var s2;
var numofc;
var cposx;
var cposy;
var n1;
var csize;
var csw;
var bassStroke;
var highMid;
var phighmid;
var ringN3;
var midRingP;
var trebleRingP;
var highMidRingP;
var dropzone;
var playButton;
var save;

function setup() {
  var cnv = createCanvas(windowWidth - 250, windowHeight);
  cnv.position(250, 0);

  dropzone = select('#upload');

  dropzone.drop(gotFile);
  sample = select('#sample');
  sample.mousePressed(playSample);

  //console.log(sample);
  fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  peakDetect = new p5.PeakDetect();
  cframe = 0;
  plevel = 0;
  level = 0;
  leveldiff = 0;
  prevS = 150;
  treble = 0;
  ptreble = 0;
  ht = 0;
  mid = 0;
  eh = 0;
  ew = 1;
  ringN1 = 0;
  ringN2 = 0;
  trebleC = 0;
  pbeats = 0;
  bpm = 0;
  pbtime = 0;
  s1 = 0;
  sw1 = 0;
  diamondS = 0;
  sw2 = 0;
  s2 = 0;
  cposx = [];
  cposy = [];
  n1 = 0;
  csize = 0;
  csw = 0;
  highMid = 0;
  phighmid = 0;
  ringN3 = 0;
  midRingP = 60;
  trebleRingP = 390;
  highMidRingP = 200;
  //dropzone = select('#dropzone');
  //dropzone.dragOver(highlight);

}


function loaded() {

  //console.log(playButton);
  if (!song.isPlaying()) {
    song.play();
    playButton.html('Pause');
  } else {
    //  console.log(song);
    song.pause();
    playButton.html('Play');
  }
}

function draw() {
  noStroke();

  colorMode(HSB, 360);
  spectrum = fft.analyze();

  var ptreble = treble;
  treble = fft.getEnergy('treble');
  var bass = fft.getEnergy('bass');
  phighmid = highMid;
  highMid = fft.getEnergy('highMid');
  var lowMid = fft.getEnergy('lowMid');

  pmid = mid;
  mid = fft.getEnergy('mid');
  plevel = level;
  level = amplitude.getLevel();
  peakDetect.update(fft);
  background(color(BackgroundC(level, treble, bass, bpm, lowMid, highMid, mid)));


  if (peakDetect.isDetected) {
    bpm = cframe - pbtime;
    pbtime = cframe;

    var beats = level;

  } else {
    bpm *= 0.95;
  }

  cframe++;



  noStroke();
  fill(colorBass(bpm, bass));
  if (bass > 40) {
    //  console.log(bass);
    rect(width / 2, height / 2, width, map(bass, 40, 255, 0, 150));
  } //bass rect



  //console.log(mid);
  //outer treble ring
  if (treble > ptreble - 3) {
    //  console.log(highMid - phighmid);

    if (treble > ptreble) {
      ringN2 += map((treble - ptreble), 0, 20, 0, 1);
    }
  } else {
    if (ringN2 > 6) {
      ringN2 *= 0.4;
    } else {
      ringN2--;
    }
    if (ringN2 < 1) {
      ringN2 = 0;
    }
  }
  fill(colorOuterRing(level, treble));



  if (highMid > phighmid - 3) {
    if (highMid > phighmid) {
      ringN3 += map(highMid - phighmid, 0, 6, 0, 0.3);
    }
  } else {
    if (ringN3 > 6) {
      ringN3 *= 0.4;
    } else {
      ringN3--;
    }
    if (ringN3 < 1) {
      ringN3 = 0;
    }
  }



  if (mid > pmid - 3) {
    if (mid > pmid) {
      ringN1 += map(mid - pmid, -1, 8, 0, 0.2);
    }
  } else {
    if (ringN1 > 6) {
      ringN1 *= 0.3;
    } else {
      ringN1--;
    }
    if (ringN1 < 1) {
      ringN1 = 0;
    }
  }
  fill(color(colorMidRing(level, mid)));



  fill(colorMid(level, mid));
  if (mid > 40) {
    ellipse(width / 2, height / 2, map(mid, 40, 255, 0, 400), map(mid, 40, 255, 0, 400));
  }
  // mid cirlce
  //  console.log(bass);
  if (peakDetect.isDetected && lowMid > 210 && mid > 168) {
    //  console.log(mid);
    bassStroke = map(level, 0, 0.3, 30, 120);
    stroke(bassStroke, 360, 360);
    s1 = map(mid, 0, 255, 0, 400);
    //console.log("hi");
    expand = map(level, 0.15, 0.4, 1.1, 1.16);
    sw1 = map(level, 0.05, 0.6, 0, 400);
    //console.log(sw1);
    console.log(expand);

    strokeWeight(sw1);
    ellipse(width / 2, height / 2, s1, s1);
  } else if (sw1 > 1) {

    stroke(0, 0, 360);
    sw1 *= 0.8;
    //  console.log(mid - pmid);
    //console.log(level);
    s1 *= expand;

    strokeWeight(sw1);
    noFill();

    ellipse(width / 2, height / 2, s1, s1);
  }
  noStroke();

  fill(colorTreble(level, treble));
  push();
  translate(width / 2, height / 2);
  rotate(radians(45));
  rect(0, 0, map(treble, 0, 255, 0, 300), map(treble, 0, 255, 0, 300)); //treble diamond
  pop();
  rectMode(CENTER);

  if (peakDetect.isDetected && lowMid < 210 && mid > 168 && level > 0.16) {



    numofc = map(level, 0, 0.5, 1, 15);
    cposx = [];
    cposy = [];
    for (let i = 0; i < numofc; i++) {
      cposx.push(random(0, width));
      cposy.push(random(0, height));
    }
    csize = map(treble, 50, 255, 0, 100);
    csw = map(level, 0, 0.5, 0, 60);
    var tstrokeh = map(treble, 0, 255, 100, 0);
    var tstrokes = map(treble, 0, 255, 0, 360);

  }
  if (csw > 1) {
    n1--;
    noFill();
    strokeWeight(csw);
    stroke(0, 0, 360);
    csize *= 1.2;
    csw *= 0.7;
    //  console.log(csw);
    for (let i = 0; i < cposx.length; i++) {
      ellipse(cposx[i], cposy[i], csize, csize);
    }
  }
  if (bass > 240 && lowMid > 192 && level > 0.15) {
    fill(color(230, 360, 360));
  } else {
    fill(color(colorMidRing(level, mid)));
  }

  push();
  translate(width / 2, height / 2);
  for (let i = 1; i <= ringN1; i++) {
    if (lowMid < 220 && bass < 230) {
      push();
      rotate(radians(360 / ringN1) * i);
      if (midRingP < 60) {
        midRingP += 30;
      }
      rect(midRingP + map(mid, 0, 255, 0, 240), 0, 30 + map(mid, 80, 255, 0, 230), map(mid, 0, 255, 0, 50));
      pop();
    } else {
      if (midRingP > 20) {
        midRingP -= 30;
      }
      push();
      rotate(radians(360 / ringN1) * i);

      rect(midRingP + map(mid, 0, 255, 0, 240), 0, 30 + map(mid, 80, 255, 0, 230), map(mid, 0, 255, 0, 50));
      pop();
    }
  }
  pop();
  fill(color(colorHighMidRing(level, highMid)));
  if (ringN3 > 2) {
    push();
    translate(width / 2, height / 2);
    if (lowMid < 220 && bass < 230) {
      if (highMidRingP < 205) {
        highMidRingP += 60;
      }
      for (let i = 0; i <= ringN3; i++) {
        push();
        rotate(radians(360 / ringN3) * i);
        rect(highMidRingP + map(highMid, 0, 255, 0, 240), 0, 30 + map(highMid, 80, 255, 0, 100), map(highMid, 0, 255, 0, 20));
        pop();
      }

    } else {
      if (highMidRingP > 60) {
        highMidRingP -= 60;
      }
      for (let i = 0; i <= ringN3; i++) {
        push();
        rotate(radians(360 / ringN3) * i);
        rect(highMidRingP + map(highMid, 0, 255, 0, 240), 0, 30 + map(highMid, 80, 255, 0, 100), map(highMid, 0, 255, 0, 30));
        pop();
      }
    }
    pop();
  }
  if (bass > 240 && lowMid > 192 && level > 0.15) {
    fill(color(340, 300, 360));

  } else {
    fill(color(colorOuterRing(level, treble)));
  }
  if (ringN2 > 2) {
    push();
    translate(width / 2, height / 2);
    for (let i = 1; i <= ringN2; i++) {
      if (lowMid < 220 && bass < 230) {
        push();
        if (trebleRingP < 390) {

          trebleRingP += 60;
        }
        rotate(radians(360 / ringN2) * i);
        rect(trebleRingP + map(treble, 0, 255, 0, 90), 0, 30 + map(treble, 40, 255, 0, 100), map(treble, 0, 255, 0, 30));
        pop();
      } else {
        if (trebleRingP > 150) {
          trebleRingP -= 60;
        }
        push();
        rotate(radians(360 / ringN2) * i);
        rect(trebleRingP + map(treble, 0, 255, 0, 90), 0, 30 + map(treble, 40, 255, 0, 100), map(treble, 0, 255, 0, 30));
        pop();
      }
    }

    pop();
  }

  trebleC = 30 + treble;

}









function colorBass(bpm, bass) {
  var s = map(bass, 40, 255, 240, 330);

  var h = map(bass, 40, 255, 120, 300);


  var b = map(bass, 40, 150, 230, 300);
  //  console.log(b);


  return color(h, s, b);
}

function colorMid(level, mid) {
  if (mid < 40) {
    h = 300;
    s = 240;
    b = 300;
  } else {
    h = map(mid, 40, 200, 300, 90);
    s = map(mid, 40, 255, 240, 360);
    b = map(mid, 40, 255, 300, 360);
  }


  return color(h, s, b);
}

function colorTreble(level, treble) {
  var h = map(treble, 0, 255, 100, 50);

  //  var s = map(level, 0, 255, 200, 260);
  var s = map(treble, 0, 200, 180, 360);
  var b = 360
  //  console.log(b);
  return color(h, s, b);
}

function colorMidRing(level, mid) {
  let h = map(mid, 0, 200, 120, 45);

  let b = map(level, 0, 0.4, 260, 360);
  let s = map(level, 0, 0.4, 200, 360);
  return color(h, s, b);
}

function colorHighMidRing(level, highMid) {
  let h = map(highMid, 0, 200, 160, 90);

  let b = 360;
  let s = 360;
  return color(h, s, b);
}

function colorOuterRing(level, treble) {
  let h = 0;

  return color(0, 0, 360);
}

function BackgroundC(level, treble, bass, bpm, lowMid, highMid, mid) {

  let h = map(mid, 0, 255, 220, 310);
  let s = 330;
  let b = map(level, 0, 0.01, 70, 100);

  if (level > 0.01) {
    //  console.log("hi")
    if (bass > 230 && lowMid > 210 && level > 0.3 && bass - treble > 90 && treble < 60 && mid > 144) {
      //  console.log(level);
      //  console.log("white");


      b = 360;
      h = 0;
      s = 0;
    } else if (bass > 200 && lowMid > 180 && lowMid < 210 && level > 0.07 && bass - treble > 90 && treble < 120 && mid > 160) {



      h = map(bass, 200, 255, 300, 160);
      if (h > 360) {
        h = h - 360;
      }
      //  console.log(mid);
      b = map(mid, 160, 185, 200, 360);
      if (mid > 185) {
        b = 360;
      }

      //  console.log(b);
      s = 360;
    } else {
      h = map(mid, 0, 255, 220, 310);
      s = 330;
      b = 100;
    }
  }
  //  console.log(bass - treble);
  return color(h, s, b);
}





function highlight() {
  dropzone.style('background-color', '#68A4FF');
  //  evt.preventDefault();


}

function unhighlight() {
  dropzone.style('background-color', '#1E1E1E');
  //evt.preventDefault();

}

function gotFile(file) {
  var songfile = file;
  song = loadSound(songfile, loaded);
  playButton = createElement('div', 'Pause');
  playButton.addClass('play');
  playButton.mousePressed(loaded);
  songName = createElement('div', 'Song: ' + songfile.name);
  songName.addClass('name');
  save = createElement('button', 'Capture this frame');
  save.addClass('save');
  save.mousePressed(capture);
  back = createElement('div', 'Try a different audio');
  back.addClass('back');
  back.mousePressed(newSong);
}

function playSample() {
  song = loadSound("music/could have been me.mp3", loaded);
  playButton = createElement('div', 'Pause');
  playButton.addClass('play');
  playButton.mousePressed(loaded);
  songName = createElement('div', 'Song: Could have been me.mp3');
  songName.addClass('name');
  save = createElement('button', 'Capture this frame');
  save = createElement('button', 'Capture this frame');
  save.addClass('save');
  save.mousePressed(capture);
  back = createElement('div', 'Try a different audio');
  back.addClass('back');
  back.mousePressed(newSong);
}


function capture() {
  saveCanvas('myCanvas', 'jpg');
}


function newSong() {
  removeElements();
  song.stop();
}