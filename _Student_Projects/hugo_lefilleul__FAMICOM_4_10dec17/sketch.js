var ok;
var glitch;
var theme;
var soundGlitch;
var frontImg;
var clicked = false;
var play = true;

function preload() {
  ok = loadImage ("imgs/A_72.jpg");
  glitch = loadImage ("imgs/B_72.jpg");
  frontImg = loadImage ("imgs/RobocopCartouche_72.jpg");
  theme = loadSound ("sounds/RoboCopTheme.mp3");
  soundGlitch = loadSound ("sounds/FatSync_2.wav");
}

function setup() {
  createCanvas (windowWidth, windowHeight);
}

function mousePressed(){
	clicked = true;
}

function frontPage(){
	imageMode(CENTER);
	image(frontImg,650,300);
}

function draw() {
	frontPage();
	if(clicked){
		background (255);
	    imageMode (CENTER);
	  if (mouseIsPressed) {
	        image (glitch, 600, 300);
	        soundGlitch.play();
	  }
	    else {
	        image (ok, 600, 300)
	  }
	  if (play) {
	    theme.play();
	    play=false;
	  }
	}
}