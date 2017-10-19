var x, vitesse;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	fill(150, 100);
	
	x = 0;
	vitesse = 5;
}

function draw() {
  background(255);
  
  x = x + vitesse;
  ellipse(x, 100, 15, 15);
}