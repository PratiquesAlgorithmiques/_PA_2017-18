var Nombres;

function setup() {
	createCanvas(windowWidth, windowHeight);
	Nombres = ["1","2","3","4","5","6","7","8","9","10","11","12"];
}

function draw() {
  frameRate(1);
  background(255,255,255);
	line(windowWidth/2,windowHeight/2,(random(int(windowWidth))),
		(random(int(windowHeight))));
	textSize(32);
  
  text((random(Nombres)), (random(int(windowWidth))),
    	(random(int(windowHeight))));
}