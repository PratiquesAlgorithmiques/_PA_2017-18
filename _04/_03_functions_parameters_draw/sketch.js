function setup() {
	createCanvas(windowWidth, windowHeight);

	frameRate(2);
}

function myfunction3(x, y) {
	fill(random(256), random(256), random(256));
	rect(x, y, 20, 20);
}

function draw() {
	background(255);
	myfunction3(random(width), random(height));
}
