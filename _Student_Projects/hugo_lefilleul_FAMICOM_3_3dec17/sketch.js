var ok;
var glitch;
//var fond;
var theme;
var soundGlitch;

function preload() {
  ok = loadImage ("imgs/A_72.jpg");
  glitch = loadImage ("imgs/B_72.jpg");
  //fond = loadImage ("imgs/gris.jpg");
  theme = loadSound ("sounds/RoboCopTheme.mp3");
  soundGlitch = loadSound ("sounds/FatSync_2.wav");
}

function setup() {
  createCanvas (windowWidth, windowHeight);
}

function draw() {
    background (255);
    imageMode (CENTER);
    if (mouseIsPressed) {
        image (glitch, 600, 300)
  }
    if (mouseIsPressed) {
      soundGlitch.play()
  }
    else {
        image (ok, 600, 300)
  }
    if (frameCount == 30) {
    theme.play();
  }
}