var x;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(150, 100);
	
	x = 0;
}


function draw() {
  background(255);
  
  x = x + 1;
  ellipse(x, 100, 15, 15);
}