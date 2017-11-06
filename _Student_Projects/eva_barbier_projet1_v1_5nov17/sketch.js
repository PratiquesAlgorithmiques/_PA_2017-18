var mySound;
var counter = 0;
var soundList = ['CFT_Lite_Plucked_Arp_Em_85_BPM.wav', 'CFT_Rim_Click_Fill.wav', 'CFT_Sub_Kick_A#m.wav'];
var counter = 0;

var sound1, sound2, sound3;

function preload() {
  sound1 = loadSound('sounds/CFT_Lite_Plucked_Arp_Em_85_BPM.wav');
  sound2 = loadSound('sounds/CFT_Rim_Click_Fill.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200);
}

function draw(){}

// function soundPlayer() {
//   mySound.play();
// }


// function maduree() {
//   counter = counter + 1;
//   if (counter < 5000) {

//   }
// }

function keyPressed() {

  if ((key == 'a') || (key == 'A')) {
    background(77, 24, 49);
    stroke(255);
    strokeWeight(5);
    line(random(width), random(height), random(width), random(height));

    sound1.play();
  }


  if ((key == 'z') || (key == 'Z')) {
    background(252, 255, 30);
    strokeWeight(0);
    fill(random(255), random(255), random(255));

    triangle(random(width), random(height), random(width), random(height), random(width), random(height));

    sound2.play();
  }


  if ((key == 'e') || (key == 'E')) {
    background(30, 180, 255);
    ellipse(random(width), random(height), 105, 105);
    fill(random(255), random(255), random(255));
  }


  if ((key == 'r') || (key == 'R')) {
    background(166, 30, 255);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(200, 200);
  }


  if ((key == 't') || (key == 'T')) {
    background(255, 78, 30);

    if (millis() > 1000) {
      fill(random(255), random(255), random(255));
      ellipse(random(0, width - 100), random(0, height-100), random(50, 100), random(50, 100));
    }
  }


  if ((key == 'y') || (key == 'Y')) {
    background(255, 30, 136);
    fill(random(255), random(255), random(255));
    rect(140, 200, 105, 360);
    rect(380, 200, 105, 250);
  }

}

function keyReleased() {
  background(255, 200, 200);
}



//  if ((key == 'a') || (key == 'A')) {
//   loadSound('sounds/CFT_Lite_Plucked_Arp_Em_85_BPM.wav' + soundList[counter], ready);
//   counter = counter + 1;
//   if (counter >= soundList.length) {
//     counter = 0;
//   }
// }
// function ready(sound) {
//   mySound = sound;
//   mySound.play();
//  }

//  if ((key == 'z') || (key == 'Z')) {
//   loadSound('CFT_Rim_Click_Fill.wav' + soundList[counter], ready);
//   counter = counter + 1;
//   if (counter >= soundList.length) {
//     counter = 0;
//   }
// }
// function ready(sound) {
//   mySound = sound;
//   mySound.play();
//  }
