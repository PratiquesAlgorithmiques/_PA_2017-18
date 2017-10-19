var x;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(240);

	x = 0;
}

function draw() {
  x = x + 1;
  print(x);
}