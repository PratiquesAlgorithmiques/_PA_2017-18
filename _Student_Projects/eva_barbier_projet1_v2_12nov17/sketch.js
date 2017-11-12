var mySound;
var counter = 0;
var soundList = ['CFT_Lite_Plucked_Arp_Em_85_BPM.wav', 'CFT_Rim_Click_Fill.wav',
'CFT_Sub_Kick_A#m.wav', 'CFT_Big_Tambourine_Hit.wav', 'CFT_808_Tom_Riser.wav',
'CFT_Cocked_Foley_FX.wav', 'CFT_Crash_Impact_01.wav', 'CFT_Foley_Snare_Roll.wav',
'CFT_Future_Chord_Stab_Em_67_BPM.wav', 'CFT_Hat_02.wav', 'CFT_Hats_07.wav',
'CFT_Kick_07.wav', 'CFT_Lite_Plucked_Arp_Em_85_BPM.wav', 'CFT_Old_Skool_Arp_Lead_Em_85_BPM.wav',
'CFT_Pitched_Pluck_Impact_Em.wav', 'CFT_Pre_Snare_Sweep.wav', 'CFT_Rim_Click_Fill.wav',
'CFT_Snapz.wav', 'CFT_Snare_03.wav', 'CFT_Soft_Sub_Kick_Am.wav', 'CFT_Sub_Drop.wav',
'CFT_Sub_Kick_Am.wav', 'CFT_Tape_Ride_Cymbal_72_BPM.wav', 'CFT_Tom_Tom_Fill.wav',
'CFT_Toybell_Arp_Lead_Am_72_BPM.wav', 'CFT_Trumpet_Stab_Am_80_BPM.wav', 'CFT_Wavey_Future_Pad_Am_72_BPM.wav'];

var sound1, sound2, sound3;

function preload() {
  sound1 = loadSound('sounds_p_p/CFT_Lite_Plucked_Arp_Em_85_BPM.wav');
  sound2 = loadSound('sounds_p_p/CFT_Rim_Click_Fill.wav');
  sound3 = loadSound('sounds_p_p/CFT_Big_Tambourine_Hit.wav');
  sound4 = loadSound('sounds_p_p/CFT_808_Tom_Riser.wav');
  sound5 = loadSound('sounds_p_p/CFT_Cocked_Foley_FX.wav');
  sound6 = loadSound('sounds_p_p/CFT_Crash_Impact_01.wav');
  sound7 = loadSound('sounds_p_p/CFT_Foley_Snare_Roll.wav');
  sound8 = loadSound('sounds_p_p/CFT_Future_Chord_Stab_Em_67_BPM.wav');
  sound9 = loadSound('sounds_p_p/CFT_Hat_02.wav');
  sound10 = loadSound('sounds_p_p/CFT_Hats_07.wav');
  sound11 = loadSound('sounds_p_p/CFT_Kick_07.wav');
  sound12 = loadSound('sounds_p_p/CFT_Lite_Plucked_Arp_Em_85_BPM.wav');
  sound13 = loadSound('sounds_p_p/CFT_Old_Skool_Arp_Lead_Em_85_BPM.wav');
  sound14 = loadSound('sounds_p_p/CFT_Pitched_Pluck_Impact_Em.wav');
  sound15 = loadSound('sounds_p_p/CFT_Pre_Snare_Sweep.wav');
  sound16 = loadSound('sounds_p_p/CFT_Rim_Click_Fill.wav');
  sound17 = loadSound('sounds_p_p/CFT_Snapz.wav');
  sound18 = loadSound('sounds_p_p/CFT_Snare_03.wav');
  sound19 = loadSound('sounds_p_p/CFT_Soft_Sub_Kick_Am.wav');
  sound20 = loadSound('sounds_p_p/CFT_Sub_Drop.wav');
  sound21 = loadSound('sounds_p_p/CFT_Sub_Kick_Am.wav');
  sound22 = loadSound('sounds_p_p/CFT_Tape_Ride_Cymbal_72_BPM.wav');
  sound23 = loadSound('sounds_p_p/CFT_Tom_Tom_Fill.wav');
  sound24 = loadSound('sounds_p_p/CFT_Toybell_Arp_Lead_Am_72_BPM.wav');
  sound25 = loadSound('sounds_p_p/CFT_Trumpet_Stab_Am_80_BPM.wav');
  sound26 = loadSound('sounds_p_p/CFT_Wavey_Future_Pad_Am_72_BPM.wav');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200);
}

function draw(){}


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
  
    sound3.play();
}


  if ((key == 'r') || (key == 'R')) {
    background(166, 30, 255);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(200, 200);

    sound4.play();
  }


  if ((key == 't') || (key == 'T')) {
    background(255, 78, 30);

    if (millis() > 1000) {
      fill(random(255), random(255), random(255));
      ellipse(random(0, width - 100), random(0, height-100), random(50, 100), random(50, 100));
    }
    sound5.play();
  }


  if ((key == 'y') || (key == 'Y')) {
    background(255, 30, 136);
    fill(random(255), random(255), random(255));
    rect(140, 200, 105, 360);
    rect(380, 200, 105, 250);

    sound6.play();
}


  if ((key == 'u') || (key == 'U')) {
    background(252, 255, 30);

    sound7.play();
}


  if ((key == 'i') || (key == 'I')) {
    fill(random(255), random(255), random(255));
    triangle(30, 75, 58, 20, 86, 75);

    sound8.play();
}


  if ((key == 'o') || (key == 'O')) {
  sound9.play();
}


  if ((key == 'p') || (key == 'P')) {
  sound10.play();
}


  if ((key == 'q') || (key == 'Q')) {
  sound11.play();
}


  if ((key == 's') || (key == 'S')) {
  sound12.play();
}


  if ((key == 'd') || (key == 'D')) {
  sound13.play();
}


  if ((key == 'f') || (key == 'F')) {
  sound14.play();
}


  if ((key == 'g') || (key == 'G')) {
  sound15.play();
}


  if ((key == 'h') || (key == 'H')) {
  sound16.play();
}


  if ((key == 'j') || (key == 'J')) {
  sound17.play();
}

  if ((key == 'k') || (key == 'K')) {
  sound18.play();
}

  if ((key == 'l') || (key == 'L')) {
  sound19.play();
}


  if ((key == 'm') || (key == 'M')) {
  sound20.play();
}


  if ((key == 'w') || (key == 'W')) {
  sound21.play();
}


  if ((key == 'x') || (key == 'X')) {
  sound22.play();
}


  if ((key == 'c') || (key == 'C')) {
  sound23.play();
}


  if ((key == 'v') || (key == 'V')) {
  sound24.play();
}


  if ((key == 'b') || (key == 'B')) {
  sound25.play();
}


  if ((key == 'n') || (key == 'N')) {
  sound26.play();
}


}
function keyReleased() {
  background(255, 200, 200);
}