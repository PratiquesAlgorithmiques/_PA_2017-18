var counter = 0;
var timer;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {}

function mousePressed() {
	counter = 0;
	timer = setInterval(fader, 20);
}

function fader() {
	fill(counter);

	rect(200, 200, 200, 200);

	counter = counter + 1;
	
	if (counter >= 255) {
		clearInterval(timer);
		background(255);
	}
}